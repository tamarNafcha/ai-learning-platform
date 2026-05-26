import api from "./api";

export const createPrompt = async (promptData) => {
  const response = await api.post("/prompts", promptData);
  return response.data;
};