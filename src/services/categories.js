import { apiClient } from "./config";

export const apiCategories = async () => {
  return apiClient.get("/categories");
};
export const apiCategory = async (id) => {
  return apiClient.get(`/category/${id}`);
};
