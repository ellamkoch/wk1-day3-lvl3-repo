# wk1-day3-lvl3-repo

This is the repo for the Week 1, Day 3 assignment for Level 3 with CodeX where I’m pulling character info from The One API. This follows the same idea and structure as the Pokémon API assignment we did in Level 2, but now it’s all Middle-earth themed. I’ve added some custom fonts, a parchment-style gradient background, and card styling so the UI fits the theme better. The goal was to practice async/await, modules, and basic error handling in a real API call (similar to the Pokémon API homework), while also wiring in Bootstrap and Axios from `node_modules.

--

## Table of Contents

- [wk1-day3-lvl3-repo](#wk1-day3-lvl3-repo)
  - [Table of Contents](#table-of-contents)
  - [Objective](#objective)
  - [Project Structure](#project-structure)
  - [Postman Notes / API Prep](#postman-notes--api-prep)
  - [Setup (npm)](#setup-npm)
  - [How to Run](#how-to-run)
  - [API Token Setup](#api-token-setup)
  - [checkEnv.js](#checkenvjs)
  - [Linters and GitHub Workflow](#linters-and-github-workflow)
  - [Current UI](#current-ui)
    - [Current CSS setup includes:](#current-css-setup-includes)
  - [Screenshots](#screenshots)
    - [Project Structure](#project-structure-1)
    - [Postman](#postman)
    - [Final](#final)
  - [What’s Next](#whats-next)
  - [Resources](#resources)

## Objective

Build a single-page app with:

- A search bar that calls an external API
- At least two JS modules (one default export, one named export)
- One async function using `async/await` with basic error handling
- Axios and Bootstrap installed and used as `node_modules`
- A README that explains how to install, run, and lint the project

## What I Built

### Overall idea

- The page lets you search The One API for characters by **first name**, **last name**, or **partial match**.
- Results are rendered as Bootstrap cards inside a responsive **flexbox layout** using `d-flex`, `flex-wrap`, and spacing utilities so results naturally wrap into rows.
- If nothing matches, the page displays a simple “No characters found” message instead of a confusing blank space.
- If the API fails, the app shows a Bootstrap error alert instead of breaking.

The result is a simple but clean and functional little LOTR-themed search tool.

Originally the “baggins” search produced one impossibly tall vertical stack of cards that stretched down the screen, so spacing and wrapping were updated to fix that. Screenshots of the “oops” versions are included because it was funny, and because it shows how flexbox saved the layout.

## Project Structure

Keeping the layout consistent with what we’ve been doing in class:

![Project Structure](./screenshots/structure/project_structure(2).png)

### Postman Notes / API Prep

Before writing any JavaScript, I spent time testing The One API in Postman. These notes are from my working document.

* Signed up at[ https://the-one-api.dev](https://the-one-api.dev?utm_source=chatgpt.com)
* Got an access token
* Set the token in Postman under Auth as a Bearer Token
* Created a Postman environment with variables for the base URL and the token
* Tested the /character endpoint to see the structure of the data

Some things I noticed while testing:

* Some characters have duplicates (like multiple versions of Bilbo)
* Some characters don’t have a lot of info (only name, no height, hair, etc.)
* Depending on the name, I might get one result or several
* Postman showed the code snippet for the request, so I could see where the Bearer token goes in the axios headers

I also used this blog to understand the Bearer token a little better since it breaks everything down really simply:
[https://rike.dev/blog/rest-apis-for-absolute-beginners](https://rike.dev/blog/rest-apis-for-absolute-beginners)

### `index.html`

- Contains the search form, button, and empty containers for results and errors.
- Imports Bootstrap CSS and axios/lodash from `node_modules`.
- Loads `scripts/main.js` using `type="module"` so ES modules work correctly.

### `scripts/services/getCharactersService.js`

Contains the **named exports** for the project:

#### `makeAPIRequest(endpoint)` – named export

- Wraps `axios.get()` with an async function
- Sends the Bearer token using the `Authorization: Bearer` header
- Extracts the `docs` array from The One API response
- Returns a simple, normalized object:
  - `{ success: true, data: docs }`
  - `{ success: false, error }`

#### `getLotrAPI(charName)` – named export

- Cleans up the search text with `.trim()`
- Builds the endpoint using the regex-style search supported by The One API:
  - `/character?name=/searchTerm/i`
- Calls `makeAPIRequest()` and returns the standardized response

A resource I used for understanding Bearer token placement:

- “REST APIs for Absolute Beginners” (rike.dev)
  This helped me confirm that the token belongs in the `Authorization` header, not the URL.

  ### `scripts/components/renderCharacters.js`

This file holds the **default export**:
`renderLotrInfo(apiResponse)`

The renderer:

- Clears any old cards and error messages
- Checks whether the API call succeeded
  - If it failed: shows a Bootstrap error alert
  - If it succeeded but returned zero results: shows a small “No characters found” message
  - Otherwise: loops through the characters and builds Bootstrap cards
- Each card shows:
  - Name
  - Realm
  - Race
  - Gender
  - Hair color
  - Height
  - Birth / death dates
  - Spouse (if available)
  - A link to the character's LOTR wiki page

Some fields come back as `null` from The One API. For this checkpoint I left them visible so the returned data stays honest.

### `scripts/main.js`

This file ties everything together:

- Imports the renderer and API functions
- Sets up the `submit` event on the form
- Validates user input
- Shows a Bootstrap loading spinner
- Calls `getLotrAPI()` using `await`
- Removes the spinner once data comes back
- Passes the result directly into `renderLotrInfo()`

This meets the “modules + async function + error handling” checkbox from the rubric.

### Styling / Bootstrap Usage

- Bootstrap is included from `node_modules`, as required.
- Bootstrap utilities used:
  - `d-flex`
  - `flex-wrap`
  - `justify-content-center`
  - `gap-*`
  - `alert-*`
  - `card` components
- Custom CSS:
  - LOTR-inspired fonts for headings and labels
  - Readable default fonts for list values
  - A gold gradient background for the “One Ring” look
  - Transparent list backgrounds inside cards so they blend better with the theme

Everything is done with flexbox.

The results layout wraps naturally into rows, which also fixed the very funny “Baggins skyscraper” issue I had earlier. Originally, every card stacked in one single vertical column that ran off the page… I’ll drop a screenshot of that in the `screenshots/oopsies` folder for documentation.

## Screenshots

I included screenshots to show how it went throughout the process, including some entertaing oopsies.

Screenshots live inside:

- `screenshots/final/`
- `screenshots/oopsies/`
- `screenshots/postman/`
- `screenshots/structure/`

## Setup (npm)

Every new project needs its own dependencies, even if we have used them before. After cloning the repo:

* npm install

Then install the project dependencies:

* npm install axios bootstrap lodash

And the dev tools:

* npm install --save-dev live-server eslint stylelint stylelint-config-standard htmlhint

This is for the lint config files and the GitHub workflow file are included, so linting runs on push.

---

## How to Run

In package.json, I added:

"scripts": {

"dev": "live-server --port=3000"

}

Then from the project root:

npm run dev

This launches the app at localhost:3000.

Then type a character name and hit the search button.

---

## API Token Setup

To actually fetch data later:

1. Log in at[ https://the-one-api.dev](https://the-one-api.dev?utm_source=chatgpt.com)
2. Copy your Bearer token
3. Go to scripts/services/getCharactersService.js
4. Paste the token into the constant at the top
5. Save

Axios uses the token inside the Authorization header like:

Authorization: Bearer `<your-token>`

That gets added in the request once the service file is written.

---

## checkEnv.js

Required for this week. This is the Node environment check script we wrote earlier. Run it like:

node scripts/services/checkEnv.js hello

It prints the Node version, current working directory, arguments, and system platform. This helps practice running JS in the terminal.

---

## Linters and GitHub Workflow

This project includes:

* ESLint for JS
* Stylelint for CSS
* HTMLHint for HTML

The GitHub Actions workflow in `.github/workflows/linters.yml` runs linting on push.

Locally, linters will eventually run via npm scripts (JS already works; CSS config still pending as I had an error in the config I noticed when running it and ran out of time to fix it before turn in).

---

## Current UI

The UI now includes:

* Title using the MiddleEarth font
* Subheading in Bilbo font
* LOTR-themed button text
* LOTR placeholder text
* Updated background using a parchment-style radial gradient
* Styled cards using a parchment overlay + blur
* All fonts imported through `@font-face` inside `styles.css`

### Current CSS setup includes:

**Custom font imports:**

* MiddleEarth (title)
* Bilbo (body text)
* MiddleEarth2 (used on the button and cards as the “card” font)

**Gradient background (parchment gold):**

---

## What’s Next

* Next steps (optional) would be improving null-field display, adding loading animations, or expanding to other endpoints (quotes, movies).

---

## Resources

These are the main things I used while getting everything set up:

* The One API documentation
  [ https://the-one-api.dev/](https://the-one-api.dev/?utm_source=chatgpt.com)
* Beginner-friendly explanation of REST APIs (helped with understanding the Bearer token)
  [ https://rike.dev/blog/rest-apis-for-absolute-beginners](https://rike.dev/blog/rest-apis-for-absolute-beginners)
* Postman (used for all initial testing)
  [ https://www.postman.com/ ](https://www.postman.com/)
* CodeX Level 3 and Level 2 API examples (mainly the Pokémon API project structure)
* GitHub Actions documentation for workflows
  [ https://docs.github.com/en/actions](https://docs.github.com/en/actions)
* CSS Gradient Generator (used to build the background)
  [https://cssgradient.io/](https://cssgradient.io/)
* Bootstrap documentation (used for layout, spacing helpers, and form styling)
  [ https://getbootstrap.com/docs/](https://getbootstrap.com/docs)

**

