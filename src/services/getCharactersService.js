//This file holds all async functions that fetch data from the One API using Axios.
// Exported functions can be imported into main.js or other files
// variable
const baseUrl = "https://the-one-api.dev/v2"; // variable for the base url of the api
const token = "MPTF16w5WMTxXeP0vv6B"; // bearer token variable
const charEndpoint = "/character?name=/"; // endpoint to search for characters

// base function for api requests
// util function
async function makeAPIRequest(endpoint) {
    try {
        const response = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}` // puts in the bearer token variable
            }
        });

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

    const endpoint = `${baseUrl}${charEndpoint}${safeName}/i`; // /i at the end helps make the search
    // bring back multiple results while making it more forgiving with filtering

    return makeAPIRequest(endpoint);

}

export { getLotrAPI, makeAPIRequest };
