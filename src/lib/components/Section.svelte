<script lang="ts">
    import Question from "./Question.svelte";
    interface Question {
        question: string,
        weight: string
    }
    export let type: string = "";
    export let name: string = "";
    export let questions: Array<Question>;
    export let active: boolean = false;
    export let nextSection: () => void; // Add this line
    export let section: number = 0;

    let activeQuestion = 0;
    let questionActivities = [];
    $: questionActivities = questions.map(() => false);
    questionActivities[activeQuestion] = true;

    function nextQuestion() {
        if (activeQuestion < questions.length - 1) {
            questionActivities[activeQuestion] = false;
            activeQuestion += 1;
            questionActivities[activeQuestion] = true;
        } else {
            nextSection(); // Call the nextSection function when all questions are answered
        }
    }
</script>

<div class="section" style={!active ? "display: none" : ""}>
    <span>{name}</span>
    {#each questions as question, index}
    <Question
        {type}
        content={question.question}
        weight={question.weight}
        active={index == activeQuestion}
        {nextQuestion}
        {section}
        question={index}

    />
    {/each}
</div>