<script lang="ts">
    import "../app.css";
</script>
<div id="page">
<img class="background-element" src="/media/circles.svg" alt="" />
<img class="background-element" id="spring-1" src="/media/spring.svg" alt="" />
</div>
<slot />

<style>
    .background-element {
        position: absolute;
        z-index: -1;
    }
    #spring-1 {
        position: absolute;
        right: 0%;
        bottom: 0%;
    }
</style>
