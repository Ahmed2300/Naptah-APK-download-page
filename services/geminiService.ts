
import { GoogleGenAI, Type } from "@google/genai";
import { PlantAnalysis } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const model = 'gemini-2.5-flash';

const analysisSchema = {
    type: Type.OBJECT,
    properties: {
        isHealthy: {
            type: Type.BOOLEAN,
            description: "True if the plant appears healthy, false otherwise.",
        },
        diseaseName: {
            type: Type.STRING,
            description: "The common name of the identified disease. Null if healthy.",
        },
        confidence: {
            type: Type.STRING,
            description: "Confidence level of the diagnosis (High, Medium, Low). Null if healthy.",
            enum: ["High", "Medium", "Low"],
        },
        symptoms: {
            type: Type.ARRAY,
            items: {
                type: Type.STRING
            },
            description: "A list of key symptoms observed from the image.",
        },
        treatment: {
            type: Type.ARRAY,
            items: {
                type: Type.STRING
            },
            description: "A list of recommended treatment steps.",
        },
        prevention: {
            type: Type.ARRAY,
            items: {
                type: Type.STRING
            },
            description: "A list of preventative measures for the future.",
        },
    },
    required: ["isHealthy", "diseaseName", "confidence", "symptoms", "treatment", "prevention"],
};

export const analyzePlantImage = async (base64Image: string, mimeType: string): Promise<PlantAnalysis> => {
    const prompt = `You are an expert plant pathologist. Analyze the provided image of a plant. Identify any potential diseases, describe the symptoms shown in the image, suggest treatment options, and provide preventative care advice. If no disease is apparent, state that the plant appears healthy. Respond with the JSON object as defined in the schema.`;

    const imagePart = {
        inlineData: {
            data: base64Image,
            mimeType: mimeType,
        },
    };

    const textPart = { text: prompt };

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: { parts: [imagePart, textPart] },
            config: {
                responseMimeType: 'application/json',
                responseSchema: analysisSchema,
            }
        });

        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);
        
        // Ensure the parsed JSON conforms to the PlantAnalysis type
        const result: PlantAnalysis = {
            isHealthy: parsedJson.isHealthy ?? true,
            diseaseName: parsedJson.diseaseName ?? null,
            confidence: parsedJson.confidence ?? null,
            symptoms: Array.isArray(parsedJson.symptoms) ? parsedJson.symptoms : [],
            treatment: Array.isArray(parsedJson.treatment) ? parsedJson.treatment : [],
            prevention: Array.isArray(parsedJson.prevention) ? parsedJson.prevention : [],
        };

        return result;

    } catch (error) {
        console.error("Error analyzing image with Gemini API:", error);
        throw new Error("Failed to get a valid response from the AI model.");
    }
};
