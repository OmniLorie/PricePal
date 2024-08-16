import { apiClient } from "./config";

export const apiCategories = async () => {
  return apiClient.get("/admin/categories");
};
export const apiCategory = async (id) => {
  return apiClient.get(`/admin/category/${id}`);
};
