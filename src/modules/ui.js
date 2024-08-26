// ui.js
import { elements } from "./domElements.js";

export function showWeatherCard() {
  elements.weatherCardContainer.classList.remove("hidden");
  elements.weatherCardContainer.style.opacity = "0";
  setTimeout(() => {
    elements.weatherCardContainer.style.opacity = "1";
  }, 10);
}

export function updateWeatherUI(data) {
  elements.locationName.textContent = data.address;
  elements.conditions.textContent = data.currentConditions.conditions;
  elements.temperature.textContent = `${data.currentConditions.temp} ℃`;
  elements.feelsLike.textContent = `${data.currentConditions.feelslike} ℃`;
  elements.humidity.textContent = `${data.currentConditions.humidity} %`;
  elements.wind.textContent = `${data.currentConditions.windspeed} km/h`;

  showWeatherCard();
}

export function showError(message) {
  alert(message);
}
