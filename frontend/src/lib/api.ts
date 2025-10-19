// src/lib/api.ts
import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from "axios";

/** Shape of your API errors (adjust to your backend) */
export type ApiErrorPayload = {
  message?: string;
  code?: string;
  details?: unknown;
};

export const api = axios.create({
  baseURL: "/api",
  timeout: 10_000,
  withCredentials: false,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    // Normalize whatever is in config.headers into an AxiosHeaders instance
    const headers = AxiosHeaders.from(config.headers);
    headers.set("Authorization", `Bearer ${token}`);
    config.headers = headers; // typed: AxiosHeaders
  }
  return config;
});

// RESPONSE interceptor: normalize errors
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (axios.isAxiosError(error)) {
      // Add a friendly default message if the server didn’t send one
      if (!error.response?.data || !(error.response.data as any).message) {
        error.message = error.message || "Network or server error";
      }
    }
    return Promise.reject(error);
  }
);

// Helper type guard you can use in components/services
export function isAxiosError<T = unknown>(
  err: unknown
): err is import("axios").AxiosError<T> {
  return axios.isAxiosError(err);
}
