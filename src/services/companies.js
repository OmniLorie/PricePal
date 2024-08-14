import { apiClient } from "./config";

export const apiCompanies = async () => {
  return apiClient.get("/companies");
};
export const apiCompany = async (id) => {
  return apiClient.get(`/company/${id}`);
};
