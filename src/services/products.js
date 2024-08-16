import { apiClient } from "./config";

export const apiProducts = async () => {
  return apiClient.get("/admin/products");
};
export const apiProduct = async (id) => {
  return apiClient.get(`/admin/product/${id}`);
};
