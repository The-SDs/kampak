<script lang="ts">
  interface School {
    nazev: string;
    ico: number;
    sektor: Object;
    obor: {
      nazev: string;
      druh: string;
      forma: string;
    };
    adresa: {
      ulice: string;
      typ_cisla_domovniho: string;
      cislo_domovni: string;
      cislo_orientacni?: string;
      obec: string;
      okres: string;
      kraj: string;
      psc: string;
    };
    web: string;
    ozp: boolean;
    prohlidka: boolean;
    geo: number;
    prijimaci_zkouska: string;
    prijimaci_zkouska_pocty: {
      nabidnuto: number;
      prihlasky: number;
      prijati: number;
    };
  }

  export let ico: number = 0;
  let data: School | null = null;

  async function getSchool(ico: number): Promise<School> {
    const response = await fetch(
      `http://localhost:3000/schools/${ico.toString()}`
    );
    return (await response.json()) as School;
  }

  $: if (ico) {
    getSchool(ico)
      .then((school) => {
        data = school;
      })
      .catch((err) => {
        console.error("Failed to fetch school data:", err);
      });
  }
</script>

<div id="school">
  {#if data}
    <h3>{data?.nazev}</h3>
    <div id="container">
      <div id="section">
        <span class="element-title">Obor:</span>
        <span>název: {data?.obor?.nazev}</span>
        <span>druh: {data?.obor?.druh}</span>
        <span>forma: {data?.obor?.forma}</span>
      </div>
      <div id="section">
        <span class="element-title">{data?.prijimaci_zkouska}</span>
        <span>místa: {data?.prijimaci_zkouska_pocty?.nabidnuto}</span>
        <span>přihlášky: {data?.prijimaci_zkouska_pocty?.prihlasky}</span>
        <span>přijato: {data?.prijimaci_zkouska_pocty?.prijati}</span>
      </div>
    </div>
    <div id="contact">
      <span><a href={data?.web}>{data?.web}</a></span>
      <span class="address">
        {data?.adresa?.ulice}
        {data?.adresa?.typ_cisla_domovniho}
        {data?.adresa?.cislo_domovni}
        {data?.adresa?.cislo_orientacni
          ? `/${data?.adresa?.cislo_orientacni}`
          : ""},
        {data?.adresa?.obec}, {data?.adresa?.okres}, {data?.adresa?.kraj}, {data
          ?.adresa?.psc}
      </span>
    </div>
  {:else}
    <p>Loading school data...</p>
  {/if}
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
