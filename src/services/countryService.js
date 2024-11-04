// src/services/countryService.js
import axios from "axios";

export async function fetchCountries() {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
}

export async function fetchCountryById(id) {
  const response = await axios.get(
    `https://restcountries.com/v3.1/alpha/${id}`
  );
  return response.data[0];
}
