import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return apiClient.post("/users/auth/signup", payload);
};
export const apiLogin = async (payload) => {
  return apiClient.post("/users/auth/token/login/", payload);
};
export const apiLogout = async () => {
  return apiClient.post(`users/auth/logout`);
};
