<script lang="ts">
  import questionnaire from "$lib/questionnaire.json";
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

<form id="questions" action="" method="post" on:submit|preventDefault={submit}>
  <span>{section.name}</span>
  <span>{question.question}</span>
  <div>
    <input
      type="checkbox"
      on:change={toggleImportant}
      bind:checked={isImportant}
    />
    <button type="button" on:click={() => nextQuestion("Ano")}>Ano</button>
    <button type="button" on:click={() => nextQuestion("Nevím")}>Nevím</button>
    <button type="button" on:click={() => nextQuestion("Ne")}>Ne</button>
    {#if isFinal}
      <button type="submit">Dokončit</button>
    {/if}
  </div>
</form>

<style>
  #questions {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
</style>
