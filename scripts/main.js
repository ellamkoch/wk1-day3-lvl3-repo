// imported js functions

import renderCharacters from "./components/renderCharacters.js";
import { getLotrAPI } from "./services/getCharactersService.js";

// Variables/Dom elements
const mainForm = document.getElementById("mainForm");
const searchInput = document.getElementById("lotrSearchInput");
const content = document.getElementById("content");

// Event listener for submit button
mainForm.addEventListener("submit", async (e) => { // need async here for it to load the await.
    // prevent default refresh action
    e.preventDefault();

    // validate the input
    const searchValue= searchInput.value.trim();// trim gets rid of extra spaces user may put in

    if (searchValue.length > 0) {
    // make the loader before the api call, then remove the loader w/ an api response
        content.innerHTML = `
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;
        const lotrResponse = await getLotrAPI(String(searchValue));
        // fetches data from the api

        content.innerHTML = ""; //clears previous cards loaded

        renderCharacters(lotrResponse);// calls function to display results or error.
    }
});
