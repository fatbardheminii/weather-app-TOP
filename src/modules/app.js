// app.js
import './../style.css'
import { elements } from "./domElements.js";
import { getWeatherData } from "./weatherAPI.js";
import { updateWeatherUI, showError } from "./ui.js";

function handleSearch() {
  const location = elements.locationInput.value.trim();
  if (location) {
    getWeatherData(location)
      .then((data) => updateWeatherUI(data))
      .catch((error) =>
        showError("Failed to fetch weather data. Please try again later.")
      );
    elements.locationInput.value = "";
  } else {
    showError("Please enter a valid location.");
  }
}

function initEventListeners() {
  elements.searchButton.addEventListener("click", handleSearch);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
}

// Initialize the app
initEventListeners();
