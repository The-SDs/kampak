import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "$env/static/private";
import type { Actions } from "@sveltejs/kit";

import questionnaire from "$lib/questionnaire.json";

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    console.log({ ...formData });

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt =
      "Dotazník:\n" + JSON.stringify(questionnaire) + "\nOdpovědi:\n";
    formData.forEach((value, key) => {
      prompt += `${key}: ${value}\n`;
    });
    prompt +=
      "Tohle je dotazník, který byl vytvořen za účelem zjistit o člověkovi, která škola ho bude bavit. Vyber podle odpovědí (formát index_sekce-index_otázky: odpověd) nejvhodnější obor z nabídky: 1. Informatika 2. Elektrotechnika 3. Strojírenství 4. Ekonomika 5. Jazyky 6. Právo 7. Medicína 8. Umění 9. Sport 10. Gymnázium. Jiné odpovědi nebudou brány v potaz. Jsou to tvé jediné možnosti jak odpovědět a to těmito vyjmenovanými slovy. Odpovědi které poskytuji mohou nabývat tří hodnot: Ano, Nevím, Ne. Popřípadě mohou mít větší váhu, což značí textem Důležité. Ještě jednou, důležitá informace:\n";
    prompt +=
      "TVOU JEDINOU ODPOVĚDÍ JE VÝBĚR 3 OBORŮ Z NABÍDKY. POUZE JEDNOSLOVNĚ, VE TVARU JSON ARRAY. [] TY, KTERÉ JSOU V NABÍDCE. ARRAY BUDE SEŘAZEN SESTUPNĚ OD NEPRAVDOPODOBNĚJŠÍHO. NA KONCI STRINGU VŽDY BUDE V ČÍSLU PERCENTUÁLNÍ SHODA. POKUD NEMÁŠ DOSTATEK INFORMACÍ, VYPIŠ PRÁZDNÝ ARRAY.";
    console.log(prompt);
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 20,
      },
    });
    console.log(result.response.text());

    return {
      success: true,
      message: result.response.text(),
    };
  },
};
