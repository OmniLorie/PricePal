import { apiClient } from "./config";

export const apiProducts = async () => {
  return apiClient.get("/products");
};
export const apiProduct = async (id) => {
  return apiClient.get(`/product/${id}`);
};
