//This file holds all async functions that fetch data from the One API using Axios.
// Exported functions can be imported into main.js or other files
import axios from "axios";

const localBaseUrl = "/api"; // local API route handled by Vite so the token stays server-side
const serverlessBaseUrl = "/.netlify/functions/lotr-characters"; // Netlify function endpoint for production
const baseUrl = import.meta.env.PROD ? serverlessBaseUrl : localBaseUrl;
const charEndpoint = import.meta.env.PROD ? "?name=" : "/characters?name="; // endpoint differs between local dev and Netlify function

// base function for api requests
// util function
async function makeAPIRequest(endpoint) {
    try {
        const response = await axios.get(endpoint);

        const { data } = response; // now destructured to make the linter happy
        const { docs } = data; // must have this to get data from the array

        return {
            success: true,
            data: docs //sends the docs array to the renderer
        };
    } catch (error) {
        // console.error("Error in makeAPIRequest:", error); //error if the API request doesn't work
        return {
            success: false,
            error
        };
    }
}

// functions that use the util function above
async function getLotrAPI(charName) {
    const safeName = charName.trim();
    // trims it if there are any extra spaces to help w/ search accuracy

    const endpoint = `${baseUrl}${charEndpoint}${encodeURIComponent(safeName)}`;
    // sends the search to the local Vite route so the API token is not exposed in browser code

    return makeAPIRequest(endpoint);

}

export { getLotrAPI, makeAPIRequest };
