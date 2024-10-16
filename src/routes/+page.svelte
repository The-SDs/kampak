<script lang="ts">
    import { goto } from "$app/navigation";
    import "@fortawesome/fontawesome-free/css/all.css";

    // Scroll to specific section function
    function scrollToSection(sectionId: string) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<img class="background-element" src="/media/circles.svg" alt="" />
<div class="title-section" id="title-section">
    <h1 id="logo">kampak</h1>
    <div id="container">
        <h2 id="title">Najdi svou vysněnou střední!</h2>
        <button
            id="questionnaire-button"
            on:click={() => goto("/questionnaire")}>Spustit dotazník</button
        >
        <span>25 otázek, 5-10 minut</span>
    </div>

    <div id="go-down-container">
        <span>Scrolluj pro další informace</span>
        <button
            id="go-down-button"
            on:click={() => scrollToSection("#information-section")}
        >
            <i class="fa-solid fa-angles-down fa-bounce"></i>
        </button>
    </div>
</div>

<img class="background-element" id="spring-1" src="/media/spring.svg" alt="" />

<div class="information-section" id="information-section">
    <div>
        <img
            class="background-element"
            id="circles-bottom"
            src="/media/circles-2.svg"
            alt=""
        />
        <div>
            <h2>Jak to funguje?</h2>
            <p>
                Vyplníš jednoduchý dotazník, několik osobních údajů a mi pro
                tebe vybereme ty nejvhodnější varianty škol podle tvých zájmů,
                preferencí a osobnosti. Na stránkách <a
                    href="https://procvicprijimacky.cermat.cz/"
                    target="_blank">CERMATu</a
                >
                si můžeš udělat cvičné testy z matematiky a češtiny, jejichž výsledky
                můžeš přidat do dotazníku. Na základě tvých odpovědí a výsledků ti
                doporučíme školy, kde máš největší šanci na přijetí.
            </p>
            <h2>Co všechno se po vyplnění dotazníku dozvím?</h2>
            <p>
                Po dokončení dotazníku se dozvíš nejen to, která škola je pro
                tebe nejvhodnější, ale také jaká je pravděpodobnost, že se na ni
                dostaneš. Získáš také tipy na další kroky, které můžeš
                podniknout, aby ses na školu lépe připravil.
            </p>
        </div>
    </div>

    <h2>Jaké faktory jsou brány v potaz?</h2>
    <div id="factors">
        <div>
            <i class="fa-solid fa-person"></i>
            <span>Tvá osobnost a zájmy</span>
        </div>
        <div>
            <i class="fa-solid fa-shapes"></i>
            <span>Obory, které tě baví</span>
        </div>
        <div>
            <i class="fa-solid fa-user-graduate"></i>
            <span>Ambice pokračovat na vysokou školu</span>
        </div>
        <div>
            <i class="fa-solid fa-file-lines"></i>
            <span>Výsledky z cvičných testů</span>
        </div>
    </div>

    <div>
        <h2>Proč si vybrat nás?</h2>
        <p>
            Naše platforma ti nabízí personalizovaný přístup k výběru střední
            školy. Snažíme se propojit tvé zájmy, dovednosti a budoucí cíle s
            nejlepšími možnostmi škol v České republice. Díky našemu algoritmu
            ti pomůžeme najít školu, kde nejen dosáhneš úspěchu, ale budeš se
            tam také cítit dobře.
        </p>
    </div>
</div>

<style>
    .title-section {
        height: 100vh;
    }
    .information-section {
        min-height: 100vh;
        overflow: hidden;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .information-section div {
        max-width: 800px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #factors {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        max-width: 1000px;
    }
    #factors div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: 200px;
        text-align: center;
        height: 156px;
    }
    #factors i {
        font-size: 30px;
        color: var(--primary-color);
        background-color: var(--accent-color);
        border-radius: 50%;
        padding: 10px;
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 100ms;
    }
    #factors i:hover {
        font-size: 68px;
        text-indent: -16px;
        padding: 2px;
        text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        color: var(--accent-color);
        background-color: var(--muted-color);
    }
    #factors span {
        font-size: 16px;
    }
    #title {
        text-align: center;
    }
    #questionnaire-button {
        margin: 0 auto;
    }
    #container {
        position: absolute;
        top: 50vh;
        transform: translateY(-50%);
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .background-element {
        position: absolute;
        z-index: -1;
    }
    #go-down-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
    #spring-1 {
        position: absolute;
        right: 0%;
        bottom: 0%;
    }
    #go-down-button {
        background-color: transparent;
        padding: 0;
        margin: 0;
    }
    #circles-bottom {
        position: absolute;
        bottom: -100%;
        right: 0%;
    }
</style>
