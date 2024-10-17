import { GEMINI_API_KEY } from "$env/static/private";
import { GoogleGenerativeAI } from "@google/generative-ai";
import prompts from "$lib/server/prompts.json";
import questionnaire from "$lib/questionnaire.json";
import { School } from "$lib/server/models/school";

const responses = JSON.parse(
  JSON.stringify(Object.fromEntries(formData.entries()))
    .replace("Ano", "Yes")
    .replace("Ne", "no")
    .replace("Nevím", "Unsure")
    .replace("Důležité", "Important")
);
const schools = await School.find({}).select(
  "ico prijimaci_zkouska prijimaci_zkouska_pocty"
);

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "models/gemini-pro",
  systemInstruction: prompts.questionnaire,
});

const prompt = `Questionnaire template:\n${JSON.stringify(
  questionnaire
)}\nResponses in a format "section-question: user response/important tag (larger question weight)":\n${JSON.stringify(
  responses
)}\nSchool selection: ${JSON.stringify(schools)}`;
console.log(JSON.stringify(schools));

const result = await model.generateContent([
  {
    text: prompt,
  },
]);
console.log(result.response.text());

return {
  success: true,
  message: result.response.text(),
};
