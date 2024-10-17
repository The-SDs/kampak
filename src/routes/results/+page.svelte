<script lang="ts">
    import School from "$lib/components/School.svelte";

    // Předpokládáme, že data jsou načtena v nějaké proměnné, např. `data`
    const data = {
        nazev: "ACADEMIA MERCURII soukromá střední škola, s.r.o.",
        ico: "62028561",
        sektor_typ: "soukromý",
        skolne: "18000",
        obor_kod: "78-42-M/02",
        obor_nazev: "Ekonomické lyceum",
        obor_delka: "4",
        obor_forma: "denní forma",
        obor_druh: "střední vzdělávání s maturitní zkouškou",
        adresa_kraj: "Královehradecký kraj",
        adresa_okres: "Náchod",
        adresa_orp: "Náchod",
        adresa_obec: "Náchod",
        adresa_psc: "54701",
        adresa_ulice: "Smiřických",
        adresa_typ_cisla_domovniho: "č.p.",
        adresa_cislo_domovni: "740",
        adresa_cislo_orientacni: null,
        web: "www.amnachod.cz",
        ozp: true,
        prohlidka: false,
        geo_longitude: "16.164733",
        geo_latitude: "50.420981",
        prijimaci_zkouska: "jednotná přijímací zkouška",
        prijimaci_zkouska_nabidnuto: "30",
        prijimaci_zkouska_prihlasky: "39",
        prijimaci_zkouska_prijati: "30",
    };
</script>

<div id="result-container">
    <div id="top-3">
        <h2>Top 3 pro tebe nejvhodnější volby</h2>
        <div class="wrapper">
            <School
                nazev={data.nazev}
                ico={data.ico}
                sektor_typ={data.sektor_typ}
                skolne={data.skolne}
                obor_kod={data.obor_kod}
                obor_nazev={data.obor_nazev}
                obor_delka={data.obor_delka}
                obor_forma={data.obor_forma}
                obor_druh={data.obor_druh}
                adresa_kraj={data.adresa_kraj}
                adresa_okres={data.adresa_okres}
                adresa_orp={data.adresa_orp}
                adresa_obec={data.adresa_obec}
                adresa_psc={data.adresa_psc}
                adresa_ulice={data.adresa_ulice}
                adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
                adresa_cislo_domovni={data.adresa_cislo_domovni}
                adresa_cislo_orientacni={data.adresa_cislo_orientacni}
                web={data.web}
                ozp={data.ozp}
                prohlidka={data.prohlidka}
                geo_longitude={data.geo_longitude}
                geo_latitude={data.geo_latitude}
                prijimaci_zkouska={data.prijimaci_zkouska}
                prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
                prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
                prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
            />
            <School
                nazev={data.nazev}
                ico={data.ico}
                sektor_typ={data.sektor_typ}
                skolne={data.skolne}
                obor_kod={data.obor_kod}
                obor_nazev={data.obor_nazev}
                obor_delka={data.obor_delka}
                obor_forma={data.obor_forma}
                obor_druh={data.obor_druh}
                adresa_kraj={data.adresa_kraj}
                adresa_okres={data.adresa_okres}
                adresa_orp={data.adresa_orp}
                adresa_obec={data.adresa_obec}
                adresa_psc={data.adresa_psc}
                adresa_ulice={data.adresa_ulice}
                adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
                adresa_cislo_domovni={data.adresa_cislo_domovni}
                adresa_cislo_orientacni={data.adresa_cislo_orientacni}
                web={data.web}
                ozp={data.ozp}
                prohlidka={data.prohlidka}
                geo_longitude={data.geo_longitude}
                geo_latitude={data.geo_latitude}
                prijimaci_zkouska={data.prijimaci_zkouska}
                prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
                prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
                prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
            />
            <School
                nazev={data.nazev}
                ico={data.ico}
                sektor_typ={data.sektor_typ}
                skolne={data.skolne}
                obor_kod={data.obor_kod}
                obor_nazev={data.obor_nazev}
                obor_delka={data.obor_delka}
                obor_forma={data.obor_forma}
                obor_druh={data.obor_druh}
                adresa_kraj={data.adresa_kraj}
                adresa_okres={data.adresa_okres}
                adresa_orp={data.adresa_orp}
                adresa_obec={data.adresa_obec}
                adresa_psc={data.adresa_psc}
                adresa_ulice={data.adresa_ulice}
                adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
                adresa_cislo_domovni={data.adresa_cislo_domovni}
                adresa_cislo_orientacni={data.adresa_cislo_orientacni}
                web={data.web}
                ozp={data.ozp}
                prohlidka={data.prohlidka}
                geo_longitude={data.geo_longitude}
                geo_latitude={data.geo_latitude}
                prijimaci_zkouska={data.prijimaci_zkouska}
                prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
                prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
                prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
            />
        </div>
    </div>
    <h2>Další vhodné školy</h2>
    <div id="others" class="wrapper">
        <School
            nazev={data.nazev}
            ico={data.ico}
            sektor_typ={data.sektor_typ}
            skolne={data.skolne}
            obor_kod={data.obor_kod}
            obor_nazev={data.obor_nazev}
            obor_delka={data.obor_delka}
            obor_forma={data.obor_forma}
            obor_druh={data.obor_druh}
            adresa_kraj={data.adresa_kraj}
            adresa_okres={data.adresa_okres}
            adresa_orp={data.adresa_orp}
            adresa_obec={data.adresa_obec}
            adresa_psc={data.adresa_psc}
            adresa_ulice={data.adresa_ulice}
            adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
            adresa_cislo_domovni={data.adresa_cislo_domovni}
            adresa_cislo_orientacni={data.adresa_cislo_orientacni}
            web={data.web}
            ozp={data.ozp}
            prohlidka={data.prohlidka}
            geo_longitude={data.geo_longitude}
            geo_latitude={data.geo_latitude}
            prijimaci_zkouska={data.prijimaci_zkouska}
            prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
            prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
            prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
        />
        <School
            nazev={data.nazev}
            ico={data.ico}
            sektor_typ={data.sektor_typ}
            skolne={data.skolne}
            obor_kod={data.obor_kod}
            obor_nazev={data.obor_nazev}
            obor_delka={data.obor_delka}
            obor_forma={data.obor_forma}
            obor_druh={data.obor_druh}
            adresa_kraj={data.adresa_kraj}
            adresa_okres={data.adresa_okres}
            adresa_orp={data.adresa_orp}
            adresa_obec={data.adresa_obec}
            adresa_psc={data.adresa_psc}
            adresa_ulice={data.adresa_ulice}
            adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
            adresa_cislo_domovni={data.adresa_cislo_domovni}
            adresa_cislo_orientacni={data.adresa_cislo_orientacni}
            web={data.web}
            ozp={data.ozp}
            prohlidka={data.prohlidka}
            geo_longitude={data.geo_longitude}
            geo_latitude={data.geo_latitude}
            prijimaci_zkouska={data.prijimaci_zkouska}
            prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
            prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
            prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
        />
        <School
            nazev={data.nazev}
            ico={data.ico}
            sektor_typ={data.sektor_typ}
            skolne={data.skolne}
            obor_kod={data.obor_kod}
            obor_nazev={data.obor_nazev}
            obor_delka={data.obor_delka}
            obor_forma={data.obor_forma}
            obor_druh={data.obor_druh}
            adresa_kraj={data.adresa_kraj}
            adresa_okres={data.adresa_okres}
            adresa_orp={data.adresa_orp}
            adresa_obec={data.adresa_obec}
            adresa_psc={data.adresa_psc}
            adresa_ulice={data.adresa_ulice}
            adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
            adresa_cislo_domovni={data.adresa_cislo_domovni}
            adresa_cislo_orientacni={data.adresa_cislo_orientacni}
            web={data.web}
            ozp={data.ozp}
            prohlidka={data.prohlidka}
            geo_longitude={data.geo_longitude}
            geo_latitude={data.geo_latitude}
            prijimaci_zkouska={data.prijimaci_zkouska}
            prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
            prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
            prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
        />
        <School
            nazev={data.nazev}
            ico={data.ico}
            sektor_typ={data.sektor_typ}
            skolne={data.skolne}
            obor_kod={data.obor_kod}
            obor_nazev={data.obor_nazev}
            obor_delka={data.obor_delka}
            obor_forma={data.obor_forma}
            obor_druh={data.obor_druh}
            adresa_kraj={data.adresa_kraj}
            adresa_okres={data.adresa_okres}
            adresa_orp={data.adresa_orp}
            adresa_obec={data.adresa_obec}
            adresa_psc={data.adresa_psc}
            adresa_ulice={data.adresa_ulice}
            adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
            adresa_cislo_domovni={data.adresa_cislo_domovni}
            adresa_cislo_orientacni={data.adresa_cislo_orientacni}
            web={data.web}
            ozp={data.ozp}
            prohlidka={data.prohlidka}
            geo_longitude={data.geo_longitude}
            geo_latitude={data.geo_latitude}
            prijimaci_zkouska={data.prijimaci_zkouska}
            prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
            prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
            prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
        />
        <School
            nazev={data.nazev}
            ico={data.ico}
            sektor_typ={data.sektor_typ}
            skolne={data.skolne}
            obor_kod={data.obor_kod}
            obor_nazev={data.obor_nazev}
            obor_delka={data.obor_delka}
            obor_forma={data.obor_forma}
            obor_druh={data.obor_druh}
            adresa_kraj={data.adresa_kraj}
            adresa_okres={data.adresa_okres}
            adresa_orp={data.adresa_orp}
            adresa_obec={data.adresa_obec}
            adresa_psc={data.adresa_psc}
            adresa_ulice={data.adresa_ulice}
            adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
            adresa_cislo_domovni={data.adresa_cislo_domovni}
            adresa_cislo_orientacni={data.adresa_cislo_orientacni}
            web={data.web}
            ozp={data.ozp}
            prohlidka={data.prohlidka}
            geo_longitude={data.geo_longitude}
            geo_latitude={data.geo_latitude}
            prijimaci_zkouska={data.prijimaci_zkouska}
            prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
            prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
            prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
        />
        <School
            nazev={data.nazev}
            ico={data.ico}
            sektor_typ={data.sektor_typ}
            skolne={data.skolne}
            obor_kod={data.obor_kod}
            obor_nazev={data.obor_nazev}
            obor_delka={data.obor_delka}
            obor_forma={data.obor_forma}
            obor_druh={data.obor_druh}
            adresa_kraj={data.adresa_kraj}
            adresa_okres={data.adresa_okres}
            adresa_orp={data.adresa_orp}
            adresa_obec={data.adresa_obec}
            adresa_psc={data.adresa_psc}
            adresa_ulice={data.adresa_ulice}
            adresa_typ_cisla_domovniho={data.adresa_typ_cisla_domovniho}
            adresa_cislo_domovni={data.adresa_cislo_domovni}
            adresa_cislo_orientacni={data.adresa_cislo_orientacni}
            web={data.web}
            ozp={data.ozp}
            prohlidka={data.prohlidka}
            geo_longitude={data.geo_longitude}
            geo_latitude={data.geo_latitude}
            prijimaci_zkouska={data.prijimaci_zkouska}
            prijimaci_zkouska_nabidnuto={data.prijimaci_zkouska_nabidnuto}
            prijimaci_zkouska_prihlasky={data.prijimaci_zkouska_prihlasky}
            prijimaci_zkouska_prijati={data.prijimaci_zkouska_prijati}
        />
    </div>
</div>

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
