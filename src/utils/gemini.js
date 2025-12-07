import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });

async function gemini(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: input,
  });

  return response;
}

export default gemini;
