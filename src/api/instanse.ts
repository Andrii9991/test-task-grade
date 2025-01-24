import axios from "axios";

const baseUrl = "https://679363375eae7e5c4d8e7653.mockapi.io/";
const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const instancseApi = axios.create({
  headers: baseHeaders,
  baseURL: baseUrl,
});
