import axios from "axios";
import { KEY } from "./credentials.js";

const BASE_URL = "https://api.weatherapi.com/v1";

// API DOCUMENTATION: https://www.weatherapi.com/docs/#

export const getCurrentWeather = (queryLocation) => {
  const url = `${BASE_URL}/current.json?key=${KEY}&q=${queryLocation}`;
  
  return axios.get(url).then((response) => response.data);
};

export const getForecast = (queryLocation, queryDays) => {
  const url = `${BASE_URL}/forecast.json?key=${KEY}&q=${queryLocation}&days=${queryDays}`;
  
  return axios.get(url).then((response) => response.data);
};