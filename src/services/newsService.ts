import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getRecentTransfers() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "List 5 recent confirmed football transfers in the Portuguese League (Liga Portugal) from newspapers like A Bola, Record, and O Jogo. Include player name, club, previous club/details, value (if known), and a brief description. Return as a JSON array of objects with fields: player, club, details, type (always 'confirmed'), time (e.g. '10:30'), description, progress (100).",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
    },
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse transfers JSON", e);
    return [];
  }
}
