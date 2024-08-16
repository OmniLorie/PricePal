import { apiClient } from "./config";

export const apiCompanies = async () => {
  return apiClient.get("/admin/companies");
};
export const apiCompany = async (id) => {
  return apiClient.get(`/admin/company/${id}`);
};
