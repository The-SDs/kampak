<script lang="ts">
    export let nazev: string = "";
    export let ico: string = "";
    export let sektor_typ: string = "";
    export let skolne: string = "";
    export let obor_kod: string = "";
    export let obor_nazev: string = "";
    export let obor_delka: string = "";
    export let obor_forma: string = "";
    export let obor_druh: string = "";
    export let adresa_kraj: string = "";
    export let adresa_okres: string = "";
    export let adresa_orp: string = "";
    export let adresa_obec: string = "";
    export let adresa_psc: string = "";
    export let adresa_ulice: string = "";
    export let adresa_typ_cisla_domovniho: string = "";
    export let adresa_cislo_domovni: string = "";
    export let adresa_cislo_orientacni: string | null = null; // Může být null
    export let web: string = "";
    export let ozp: boolean = false; // Prázdný string pro boolean
    export let prohlidka: boolean = false; // Prázdný string pro boolean
    export let geo_longitude: string = "";
    export let geo_latitude: string = "";
    export let prijimaci_zkouska: string = "";
    export let prijimaci_zkouska_nabidnuto: string = "";
    export let prijimaci_zkouska_prihlasky: string = "";
    export let prijimaci_zkouska_prijati: string = "";
</script>

<div id="school">
    <h3>{nazev}</h3>
    <div id="container">
        <div id="section">
            <span class="element-title">Obor:</span>
            <span>název: {obor_nazev}</span>
            <span>druh: {obor_druh}</span>
            <span>forma{obor_forma}</span>
        </div>
        <div id="section">
            <span class="element-title">{prijimaci_zkouska}</span>
            <span>místa: {prijimaci_zkouska_nabidnuto}</span>
            <span>přihlášky: {prijimaci_zkouska_prihlasky}</span>
            <span>přijato: {prijimaci_zkouska_prijati}</span>
        </div>
    </div>
    <div id="contact">
        <span><a href="">{web}</a></span>
        <span class="address">
            {adresa_ulice}
            {adresa_typ_cisla_domovniho}
            {adresa_cislo_domovni}
            {adresa_cislo_orientacni ? adresa_cislo_orientacni : ""},
            {adresa_obec}, {adresa_okres}, {adresa_kraj}, {adresa_psc}
        </span>
        <!-- Přidána adresa -->
    </div>
</div>

<style>
    #container {
        display: flex;
    }
    #section {
        display: flex;
        flex-direction: column;
    }
    #school {
        min-width: 240px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 16px;
        margin: 16px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        backdrop-filter: Blur(20px);
        background-color: color-mix(var(--primary-color), trasparent, 50%);
    }
</style>
