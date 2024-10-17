<script lang="ts">
    import School from "$lib/components/School.svelte";

    export let data: Array<Object> = [];

</script>

<div id="result-container">
    <div id="top-3">
        <h2>Top 3 pro tebe nejvhodnější volby</h2>
        <div class="wrapper">
            {#each data.slice(0, 2) as schoolICO}
            <School
            ico={parseInt(Object.keys(schoolICO)[0])}
            />
        {/each}
        </div>
    </div>
</div>
<h2>Další vhodné školy</h2>
<div id="others" class="wrapper"></div>

<style>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    h2 {
        width: 100%;
        text-align: center;
    }
</style>
