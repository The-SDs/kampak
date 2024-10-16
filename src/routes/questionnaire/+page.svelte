<script>
    import Question from "$lib/components/Question.svelte";
    import questionnaire from "$lib/questionnaire.json";

    let entries = Object.entries(questionnaire);
</script>

<div id="questionnaire">
    {#each entries as [key, value]} 
        <p>{value}</p>
    {/each}
    <Question
        type="open"
        content="Jsi vědomý o tom, že se můžeš otevřít kdysi?"
        weight="3"
    />
    <form id="quests" action="" method="post">
        <input type="checkbox" name="importance" id="importance-button" />
        <button id="no-button">Ne</button>
        <button id="dont-know-button">Nevím</button>
        <button id="yes-button">Ano</button>
    </form>
</div>

<style>
    #questionnaire {
        max-width: 800px;
        margin: 0 auto;
    }
    button {
        width: 100px;
    }
</style>
