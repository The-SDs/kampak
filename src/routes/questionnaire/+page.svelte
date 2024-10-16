<script lang="ts">
  import questionnaire from "$lib/questionnaire.json";
  import "@fortawesome/fontawesome-free/css/all.css";
  let { sections } = questionnaire;

  $: sectionIndex = 0;
  $: questionIndex = 0;
  $: section = sections[sectionIndex];
  $: question = section.questions[questionIndex];
  let isFinal = false;

  let data: Record<string, any> = {};
  let isImportant = false;

  function nextQuestion(selectedOption: string) {
    data[`${sectionIndex}-${questionIndex}`] = selectedOption;
    if (questionIndex < section.questions.length - 1) questionIndex++;
    else if (sectionIndex < sections.length - 1) {
      sectionIndex++;
      questionIndex = 0;
    } else {
      isFinal = true;
    }

    isImportant = false; // Reset the checkbox state
  }

  async function submit(event: Event) {
    let body: string = "";
    for (let [key, value] of Object.entries(data)) {
      body += `${key}=${value}&`;
    }
    await fetch((event.currentTarget as EventTarget & HTMLFormElement).action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  }

  function toggleImportant(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    isImportant = checkbox.checked;
    data[`${sectionIndex}-${questionIndex}`] = "Důležité";
  }
</script>

<div id="questinnaire-container">
  <h1 id="title">dotazník</h1>
  <form
    id="questions"
    action=""
    method="post"
    on:submit|preventDefault={submit}
  >
    {#if !isFinal}
      <div>
        <span>{questionIndex + 1}/{section.questions.length}</span><span>
          {section.name}</span
        >
      </div>
      <span id="question-text">{question.question}</span>
    {/if}
    <div>
      {#if isFinal}
        <div id="done-container">
          <span>Úspěšně jste dokončil test.</span>
          <button type="submit">Dokončit</button>
        </div>
      {/if}
    </div>
  </form>
  <button id="back-button"
    ><i class="fa-solid fa-angle-left"></i> předchozí otázka</button
  >

  {#if !isFinal}
    <div id="options">
      <div id="option-buttons">
        <button
          id="yes-button"
          type="button"
          on:click={() => nextQuestion("Ano")}>Ano</button
        >
        <button
          id="unknown-button"
          type="button"
          on:click={() => nextQuestion("Nevím")}>Nevím</button
        >
        <button id="no-button" type="button" on:click={() => nextQuestion("Ne")}
          >Ne</button
        >
      </div>
      <label id="interest-container">
        <div class="custom-checkbox">
          <input
            type="checkbox"
            on:change={toggleImportant}
            bind:checked={isImportant}
          />
          <span class="checkmark"></span>
        </div>
        <span id="checkbox-text">Je to pro mě důležité</span>
      </label>
    </div>
  {/if}
</div>

<style>
  /* Skryjeme výchozí checkbox */
  .custom-checkbox input[type="checkbox"] {
    opacity: 0;
    cursor: pointer;
  }

  #interest-container {
    display: flex;
    align-items: center; /* Vertikální vycentrování */
    justify-content: center;
    margin: 8px;
    cursor: pointer;
    height: 100dvh;
  }

  /* Vytvoříme kruhový tvar pro náš vlastní checkbox */
  .custom-checkbox {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
  }

  #checkbox-text {
    margin-left: 16px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }

  .custom-checkbox .checkmark {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #ffffff; /* Okraj checkboxu */
    transition: 0.1s;
  }

  /* Při zaškrtnutí zobrazíme malou tečku */
  .custom-checkbox input[type="checkbox"]:checked + .checkmark::after {
    content: "";
    position: absolute;
    width: 13px; /* Velikost tečky */
    height: 13px;
    background-color: var(--accent-color); /* Barva tečky */
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centrování tečky */
  }

  #no-button {
    border: solid #e34f4f;
    background-color: transparent;
    color: var(--text-color);
    transition: 100ms;
  }
  #no-button:hover {
    background-color: #e34f4f7d;
  }
  #yes-button {
    border: solid #4fe38a;
    background-color: transparent;
    color: var(--text-color);
    transition: 100ms;
  }
  #yes-button:hover {
    background-color: #4fe38a78;
  }

  #unknown-button {
    border: solid var(--accent-color);
    background-color: transparent;
    color: var(--text-color);
    transition: 100ms;
  }
  #unknown-button:hover {
    background-color: var(--muted-color);
  }

  /* Možnosti pro tlačítka */
  #options button {
    margin: 0 8px;
  }

  #title {
    position: absolute;
    top: 32px;
  }

  #questinnaire-container {
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #questions {
    min-width: 300px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 32px;
    margin: 0px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    backdrop-filter: Blur(20px);
    background-color: color-mix(var(--primary-color), trasparent, 50%);
  }

  #done-container {
    display: flex;
    flex-direction: column;
  }

  #options {
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  #back-button {
    background: transparent;
    color: var(--text-color);
  }

  #back-button i {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    #options {
      height: 220px;
    }
    #option-buttons {
      display: flex;
      flex-direction: column;
    }
    #option-buttons button {
      width: 220px;
      align-items: center;
      margin: 8px;
    }

    #title {
      font-size: 2em; /* Adjust title size */
    }
  }
</style>
