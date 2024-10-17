<script lang="ts">
  import { goto } from "$app/navigation";
  import questionnaire from "$lib/questionnaire.json";
  import "@fortawesome/fontawesome-free/css/all.css";
  // import type { PageData } from "../$types";
  let { sections } = questionnaire;

  $: sectionIndex = 0;
  $: questionIndex = 0;
  $: section = sections[sectionIndex];
  $: question = section.questions[questionIndex];
  $: isOpen = section.type == "close";
  $: value = "";
  $: placeholder = "placeholder" in question ? question.placeholder : "";
  let isFinal = false;

  // Address suggestion functionality
  let address = ""; // Bind the address value
  let suggestions: string[] = []; // Array to hold suggestions

  async function getSuggestions() {
    if (address.length < 3) {
      suggestions = [];
      return;
    }

    const response = await fetch(
      `/autocomplete?input=${encodeURIComponent(address)}`
    );

    if (response.ok) {
      const data = await response.json();
      suggestions = data.predictions.map(
        (prediction: { description: string }) => prediction.description
      );
    } else {
      suggestions = [];
    }
  }

  function selectAddress(selectedAddress: string) {
    address = selectedAddress;
    suggestions = [];
  }

  let data: Record<string, any> = {};
  let isImportant = false;

  function goBack() {
    if (questionIndex > 0) {
      questionIndex--;
    } else if (sectionIndex > 0) {
      sectionIndex--;
      questionIndex = sections[sectionIndex].questions.length - 1;
    }
  }

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

  function submitValue() {
    let isValid = false;
    if ("type" in question && question.type == "address") {
      if (address.length < 128) {
        // Check address length instead of value
        isValid = true;
      }
    }
    if ("type" in question && question.type == "points") {
      let parsedFloat = parseFloat(value);
      if (!isNaN(parsedFloat) && parsedFloat > 0 && parsedFloat <= 50) {
        isValid = true;
      }
    }
    if (isValid) {
      nextQuestion(
        "type" in question && question.type == "address" ? address : value
      ); // Use address if type is address
      address = ""; // Reset address after submission
      value = ""; // Reset value after submission
    }
  }

  async function submit(event: Event) {
    let body: string = "";
    for (let [key, value] of Object.entries(data)) {
      body += `${key}=${encodeURIComponent(value)}&`;
    }
    body = body.slice(0, -1); // Remove the trailing '&'

    const actionUrl = (event.currentTarget as EventTarget & HTMLFormElement)
      .action;

    const response = await fetch(actionUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (response.ok) {
      const responseData = await response.json();
      let query = "";
      const message = responseData.message ?? [];
      for (let entry of message) {
        const [ico, prctnt] = Object.entries(entry)[0] as [
          string,
          string | number | boolean,
        ];
        query += `${encodeURIComponent(ico)}=${encodeURIComponent(prctnt)}&`;
      }
      query = query.slice(0, -1); // Remove the trailing '&'

      console.log("Query string:", query); // Log the query string

      await goto(`/results?${query}`);
    } else {
      console.error("Failed to submit the form");
    }
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
  <button id="back-button" type="button" on:click={goBack}>
    <i class="fa-solid fa-angle-left"></i> předchozí otázka
  </button>

  {#if !isFinal}
    {#if isOpen}
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
          <button
            id="no-button"
            type="button"
            on:click={() => nextQuestion("Ne")}>Ne</button
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
    {:else}
      <div class="selection">
        {#if "type" in question && question.type == "address"}
          <input
            class="info-input"
            type="text"
            placeholder="Zadejte adresu"
            bind:value={address}
            on:input={getSuggestions}
          />
          {#if suggestions.length > 0}
            <ul>
              {#each suggestions as suggestion}
                <button
                  on:click={() => selectAddress(suggestion)}
                  class="suggestion-button"
                  type="button"
                >
                  {suggestion}
                </button>
              {/each}
            </ul>
          {/if}
        {:else}
          <input
            class="info-input"
            id="number-input"
            {placeholder}
            type="text"
            name="inputValue"
            bind:value
          />
        {/if}
        <button id="next-button" type="button" on:click={() => submitValue()}
          >Pokračovat</button
        >
      </div>
    {/if}
  {/if}
</div>

<style>
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
    border: 2px solid #ffffff;
    transition: 0.1s;
  }

  .custom-checkbox input[type="checkbox"]:checked + .checkmark::after {
    content: "";
    position: absolute;
    width: 13px;
    height: 13px;
    background-color: var(--accent-color);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  .info-input {
    width: 100px;
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

  /* Styles for suggestions */
  ul {
    z-index: 999;
    position: absolute;
    list-style: none;
    padding: 8px;
    margin: 0;
    max-height: 200px;
    max-width: 600px;
    overflow: hidden;
    backdrop-filter: Blur(20px);
    background-color: color-mix(var(--primary-color), trasparent, 50%);
    border-radius: 5px;
  }
  .suggestion-button {
    width: 100%;
    text-align: left;
    margin: 2px 0;
  }

  /* Styly pro input */
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
