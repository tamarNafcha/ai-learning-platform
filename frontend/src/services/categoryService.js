import api from "./api";

export const getAllCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const getSubCategoriesByCategory = async (categoryId) => {
  const response = await api.get(`/categories/${categoryId}/subcategories`);
  return response.data;
};

export const createCategory = async (categoryData) => {
  const response = await api.post("/categories", categoryData);
  return response.data;
};

export const createSubCategory = async (subCategoryData) => {
  const response = await api.post("/categories/subcategories", subCategoryData);
  return response.data;
};