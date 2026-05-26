import api from "./api";

export const getAllUsers = async () => {
  const response = await api.get("/admin/users");
  return response.data;
};

export const getAllPrompts = async () => {
  const response = await api.get("/admin/prompts");
  return response.data;
};