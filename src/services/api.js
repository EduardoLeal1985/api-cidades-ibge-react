import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export const municipios = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/",
});

export const estados = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
});
