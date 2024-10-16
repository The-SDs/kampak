<script lang="ts">
  export let type: string = "";
  export let content: string = "";
  export let weight: string = "3";
  export let active: boolean = false;
  export let nextQuestion: () => void;
  export let section: number = 0;
  export let question: number = 0;
  export let isLast: boolean = true;
</script>

<div style={!active ? "display: none" : ""}>
  <span>{content}</span>
  <br />
  <input
    type="checkbox"
    name={`important-${section.toString() + question.toString()}`}
    id="important-checkbox"
  />
  <button id="test" type="submit" name="test" value="test-v">test</button>
  <button
    id="yes-button"
    type="button"
    on:click={nextQuestion}
    name={`yes-${section.toString() + question.toString()}`}
    value="ano"
  />
  <button
    id="unknown-button"
    type="button"
    on:click={nextQuestion}
    name={`unknown-${section.toString() + question.toString()}`}
    value="nevím"
  />
  <button
    id="no-button"
    type="button"
    on:click={nextQuestion}
    name={`no-${section.toString() + question.toString()}`}
    value="ne"
  />
  <button type="submit">Dokončit</button>
</div>

<style>
  button {
    width: 100px;
  }
</style>
