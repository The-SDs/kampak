import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "$env/static/private";
import type { Actions } from "@sveltejs/kit";
import { School } from "$lib/server/models/school";
import { getDistanceMatrix } from "$lib/server/calculation";

import questionnaire from "$lib/questionnaire.json";
import prompts from "$lib/server/prompts.json";

export const actions: Actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      let schools = await School.find({}).select("-_id").exec();

      const responses = JSON.parse(
        JSON.stringify(Object.fromEntries(formData.entries()))
          .replace("Ano", "Yes")
          .replace("Ne", "no")
          .replace("Nevím", "Unsure")
          .replace("Důležité", "Important")
      );

      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: "models/gemini-1.5-flash",
        systemInstruction: prompts.questionnaire,
      });

      let prompt = `Questionnaire template:\n${JSON.stringify(
        questionnaire
      )}\nResponses in a format "section-question: user response/important tag (larger question weight)":\n${JSON.stringify(
        responses
      )}\nSchool selection:\n`;
      for (let school of schools) {
        for (let [key, value] of Object.entries(school.toObject())) {
          let val = value;
          if (value instanceof Object) {
            val = JSON.stringify(value);
          }
          prompt += `${key}: ${val}\n`;
        }
      }

      const result = await model.generateContent([
        {
          text: prompt,
        },
      ]);
      const response = result.response.text();
      console.log(response.substring(7, response.length - 3));
      return {
        success: true,
        message: JSON.parse(response.substring(7, response.length - 3)),
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error generating content, try again later.",
      };
    }
  },
};
