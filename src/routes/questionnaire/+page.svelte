<script>
  import Section from "$lib/components/Section.svelte";
  import questionnaire from "$lib/questionnaire.json";
  let { sections } = questionnaire;
  let activeSection = 0;
  let sectionActivities = [];

  $: sectionActivities = sections.map(() => false);
  sectionActivities[activeSection] = true;

  function nextSection() {
    if (activeSection < sections.length - 1) {
      sectionActivities[activeSection] = false;
      activeSection += 1;
      sectionActivities[activeSection] = true;
    }
  }
</script>

<form id="questions" action="" method="post">
  {#each sections as { type, name, questions }, index}
    <Section
      {type}
      {name}
      {questions}
      active={index == activeSection}
      {nextSection}
      section={index}
    />
  {/each}
</form>

<style>
  #questions {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
</style>
