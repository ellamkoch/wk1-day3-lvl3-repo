# Lord of the Rings Character Search

A themed single-page character search app built with vanilla JavaScript, Vite, Axios, Bootstrap, and The One API.

This project lets users search for Lord of the Rings characters by name and view returned character details in responsive cards. It was originally built as an API practice project and has been refined as a portfolio piece to show API integration, async JavaScript, modular code structure, environment variable handling, and themed UI styling.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Setup](#setup)
- [API Token Setup](#api-token-setup)
- [Security Note](#security-note)
- [Available Scripts](#available-scripts)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Resources](#resources)

## Overview

The app searches The One API for character data and displays matching results in styled cards. Users can search by first name, last name, or partial character name.

The UI was designed with a Middle-earth-inspired look using custom fonts, a parchment-style gold gradient background, Bootstrap layout utilities, and custom CSS.

The project focuses on:

- Fetching data from a third-party API
- Keeping private API tokens out of browser code
- Using `async/await` for asynchronous requests
- Organizing JavaScript with modules
- Handling loading, empty, and error states
- Rendering API results dynamically
- Styling a themed responsive layout

## Features

- Search Lord of the Rings characters by name
- Supports partial name searches
- Displays multiple matching characters
- Responsive Bootstrap card layout
- Loading spinner while data is being fetched
- Error message if the API request fails
- No-results message for empty searches
- Character details including name, realm, race, gender, hair color, height, birth and death information, spouse, and wiki link

## Tech Stack

- HTML
- CSS
- JavaScript
- Vite
- Axios
- Bootstrap
- Lodash
- ESLint
- Stylelint
- HTMLHint
- GitHub Actions

## Project Structure

```text
.
|-- .env.example
|-- .gitignore
|-- .htmlhintrc
|-- .prettierrc.json
|-- LICENSE
|-- README.md
|-- eslint.config.cjs
|-- index.html
|-- package-lock.json
|-- package.json
|-- stylelint.config.cjs
|-- vite.config.js
|-- github/
|   `-- workflows/
|       `-- linters.yml
|-- scripts/
|   `-- checkEnv.js
|-- src/
|   |-- main.js
|   |-- styles.css
|   |-- components/
|   |   `-- renderCharacters.js
|   `-- services/
|       `-- getCharactersService.js
|-- styles/
|   `-- fonts/
|       |-- Bilbo-Regular.ttf
|       |-- MiddleEarth.otf
|       `-- MiddleEarth2.ttf
|-- screenshots/
|   |-- final/
|   |   |-- baggins_search_fixed.png
|   |   |-- final_aragorn_search.png
|   |   |-- final_error.png
|   |   `-- page_b4_search.png
|   |-- oopsies/
|   |   |-- baggins_search_lol.png
|   |   |-- cards_before.png
|   |   `-- error_oopsie.png
|   `-- postman/
|       |-- postman_code_snippet.png
|       `-- successful_postman_char_search.png
```

## How It Works

The app is split into service, rendering, main control logic, and a small Vite server middleware.

### Browser API Service

`src/services/getCharactersService.js` handles the browser request.

It:

- Trims the user's search input
- Builds a local `/api/characters?name=...` request
- Uses Axios to call the local Vite API route
- Returns a standardized success or error response

The browser does not receive or send The One API token directly.

### Vite API Middleware

`vite.config.js` adds a local API route during Vite dev and preview.

It:

- Reads `LOTR_API_TOKEN` from `.env`
- Receives browser requests at `/api/characters`
- Calls The One API from the Vite server process
- Adds the Bearer token on the server side
- Returns The One API response back to the browser

### Rendering

`src/components/renderCharacters.js` is responsible for updating the page.

It:

- Clears old search results
- Displays an error alert if the request fails
- Displays a no-results message if nothing is found
- Creates Bootstrap cards for each returned character
- Keeps returned API data visible without hiding missing fields

### Main JavaScript File

`src/main.js` connects the form to the API service and renderer.

It:

- Listens for the form submission
- Prevents the page from refreshing
- Validates the search input
- Shows a loading spinner
- Calls the API service with `await`
- Passes the response to the renderer

## Setup

Clone the repository:

```bash
git clone <your-repo-url>
```

Move into the project folder:

```bash
cd <project-folder-name>
```

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env
```

Add your real The One API token to `.env`:

```env
LOTR_API_TOKEN=your_real_token_here
```

Start the Vite dev server:

```bash
npm run dev
```

If PowerShell blocks the `npm` shim, use:

```powershell
npm.cmd run dev
```

Then open the local URL printed by Vite, usually:

```text
http://localhost:5173/
```

## API Token Setup

This project uses The One API, which requires a Bearer token.

The token should not be hardcoded in browser JavaScript or stored in any committed source file. This project uses a server-only environment variable:

```env
LOTR_API_TOKEN=your_real_token_here
```

Important:

- Use `LOTR_API_TOKEN`, not `VITE_LOTR_API_TOKEN`.
- Variables that start with `VITE_` are exposed to browser code by Vite.
- `.env` is ignored by Git and should stay private.
- `.env.example` is safe to commit because it only contains a placeholder value.

The browser calls:

```text
/api/characters?name=aragorn
```

The Vite middleware forwards that request to The One API and adds:

```text
Authorization: Bearer <your token>
```

on the server side.

## Security Note

This setup keeps the token out of the browser bundle during local development and Vite preview.

If a token was ever committed, pushed to GitHub, or exposed in browser code, rotate or regenerate it if The One API allows that.

For production deployment, a purely static host like GitHub Pages cannot protect a private API token by itself. Use a backend route or serverless function, such as a Netlify Function, Vercel Serverless Function, or another small API server, and store `LOTR_API_TOKEN` in that platform's environment variable settings.

## Available Scripts

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run all linters:

```bash
npm run lint
```

Run the Node environment check script:

```bash
node scripts/checkEnv.js hello
```

## Screenshots

Screenshots are organized into folders:

```text
screenshots/final/
screenshots/oopsies/
screenshots/postman/
```

The `oopsies` folder includes earlier layout issues from development, including a search result layout that stacked too tall before the flexbox wrapping was improved.

## Future Improvements

Planned or possible updates:

- Deploy the project with a backend route or serverless function for production API requests
- Add pagination for larger result sets
- Improve how missing or `null` API fields display
- Add a default character suggestion list
- Add a clear search/reset button
- Add better mobile spacing and card sizing
- Add accessible focus states for keyboard navigation
- Add a small recent searches feature

## Bootstrap vs. Tailwind Note

This project currently uses Bootstrap, which is useful to keep because it shows experience working with a component and utility framework outside of Tailwind.

A future Tailwind refactor could be worthwhile, especially to improve theme control and custom styling, but the Bootstrap version is worth keeping first while focusing on portfolio polish, deployment, pagination, and secure token handling.

## Resources

- The One API documentation: [https://the-one-api.dev/](https://the-one-api.dev/)
- REST APIs for Absolute Beginners: [https://rike.dev/blog/rest-apis-for-absolute-beginners](https://rike.dev/blog/rest-apis-for-absolute-beginners)
- Postman: [https://www.postman.com/](https://www.postman.com/)
- Bootstrap Documentation: [https://getbootstrap.com/docs/](https://getbootstrap.com/docs/)
- Vite Documentation: [https://vite.dev/](https://vite.dev/)
- GitHub Actions Documentation: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
- CSS Gradient Generator: [https://cssgradient.io/](https://cssgradient.io/)
