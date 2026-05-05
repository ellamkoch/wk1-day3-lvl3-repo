//file renders Lord of the Ring Character card onto the page after the search
//Variables - gets the content and error containers from the DOM
const content = document.getElementById("content");
const errorBox = document.getElementById("errorBox"); // reference to show error messages on the page instead of the char info

function renderLotrInfo(apiResponse) {
    if(apiResponse.success) {
        //clears any results or errors on the page from a previous search
        errorBox.innerHTML = "";
        content.innerHTML ="";

        // var to hold the api response of the search results. it'll be an array in this case
        const characters = apiResponse.data;

        // if there are no results, show a simple message
        if (!characters || characters.length === 0) {
            errorBox.innerHTML = `
            <div class="alert alert-warning" role="alert">
                No characters found. <br>
                Try a different search.
            </div>`;
            return;
        }

        //building the info for the card
        const cardsHtml = characters.map((lotrChar) => {
            // using map to go through the array and pull the info of the searched char as html
            const { //destructured so its cleaner
                name,
                realm,
                race,
                gender,
                hair,
                height,
                birth,
                death,
                spouse,
                wikiUrl
            } = lotrChar;
            //returns an html card per char. could have multiples depending upon search criteria.
            return `
                <div class="card bg-transparent mb-3 w-100">
                    <div class="card-body">
                    <h5 class="card-title text-center">Name: ${name}</h5>
                    <ul class="list-group">
                    <li class="list-group-item">
                        <span class="lotr-label">Realm:</span>
                        <span class="lotr-value">${realm}</span></li>
                    <li class="list-group-item">
                        <span class="lotr-label">Race:</span>
                        <span class="lotr-value">${race}</span></li>
                    <li class="list-group-item">
                        <span class="lotr-label">Gender:</span>
                        <span class="lotr-value">${gender}</span></li>
                    <li class="list-group-item">
                        <span class="lotr-label">Hair Color:</span>
                        <span class="lotr-value">${hair}</span></li>
                    <li class="list-group-item">
                        <span class="lotr-label">Height:</span>
                        <span class="lotr-value">${height}</span></li>
                    <li class="list-group-item">
                        <span class="lotr-label">Date of Birth:</span>
                        <span class="lotr-value">${birth}</span></li>
                    <li class="list-group-item">
                        <span class="lotr-label">Date of Death:</span>
                        <span class="lotr-value">${death}</span></li>
                    <li class="list-group-item">
                        <span class="lotr-label">Spouse Name:</span>
                        <span class="lotr-value">${spouse}</span>
                    <li class="list-group-item">
                        <span class="lotr-label">Wiki URL:</span>
                        <span class="lotr-value">
                        <a href="${wikiUrl}" target="_blank" rel="noreferrer">View on LOTR Wiki</a></span></li>
                    </ul>
                </div>
            </div>
            `;// target="_blank" opens a new window. rel="noreferrer" protects my privacy and doesn't tell the page where the search came from.
        })
            .join(""); //turns the array of HTML strings into one big HTML string
        // drop all the cards into the content container, whether there's 1 or more characters found
        content.innerHTML = cardsHtml;
    } else {
        // error message displayed if there's a bad response from the api
        const { error } = apiResponse;
        content.innerHTML = `
            <div class="alert alert-danger" role="alert">
            <h2>something went wrong fetching the character data.</h2>
            <p>The API failed because of ${error.message}</p>
            </div>
        `;
    }
}

export default renderLotrInfo;
