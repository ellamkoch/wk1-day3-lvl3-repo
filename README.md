# Lord of the Rings Character Search

A themed single-page character search app built with JavaScript, Axios, Bootstrap, and The One API.

This project lets users search for Lord of the Rings characters by name and view returned character details in responsive cards. It was originally built as part of a CodeX API practice project and has been refined as a portfolio piece to show API integration, async JavaScript, modular code structure, and themed UI styling.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Setup](#setup)
- [API Token Setup](#api-token-setup)
- [Available Scripts](#available-scripts)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Resources](#resources)

## Overview

The app searches The One API for character data and displays matching results in styled cards. Users can search by first name, last name, or partial character name.

The UI was designed with a Middle-earth-inspired look using custom fonts, a parchment-style gold gradient background, Bootstrap layout utilities, and custom CSS.

The project focuses on:

- Fetching data from a third-party API
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
- “No characters found” message for empty results
- Character details including:
  - Name
  - Realm
  - Race
  - Gender
  - Hair color
  - Height
  - Birth and death information
  - Spouse
  - Wiki link, when available

## Tech Stack

- HTML
- CSS
- JavaScript
- Axios
- Bootstrap
- Lodash
- Live Server
- ESLint
- Stylelint
- HTMLHint
- GitHub Actions

## Project Structure

```text
.
├── index.html
├── package.json
├── scripts/
│   ├── main.js
│   ├── components/
│   │   └── renderCharacters.js
│   └── services/
│       ├── checkEnv.js
│       └── getCharactersService.js
├── styles/
│   └── styles.css
├── screenshots/
│   ├── final/
│   ├── oopsies/
│   ├── postman/
│   └── structure/
└── .github/
    └── workflows/
        └── linters.yml
```

## How It Works

The app is split into service, rendering, and main control logic.

### API Service

The API service handles the request to The One API.

It:

* Trims the user’s search input
* Builds the character search endpoint
* Sends the Bearer token in the request headers
* Uses Axios to make the request
* Returns a standardized success or error response

### Rendering

The renderer is responsible for updating the page.

It:

* Clears old search results
* Displays an error alert if the request fails
* Displays a no-results message if nothing is found
* Creates Bootstrap cards for each returned character
* Keeps the returned API data visible without hiding missing fields

### Main JavaScript File

The main file connects the form to the API service and renderer.

It:

* Listens for the form submission
* Prevents the page from refreshing
* Validates the search input
* Shows a loading spinner
* Calls the API service with `await`
* Passes the response to the renderer

## Setup

Clone the repository:

<pre class="overflow-visible! px-0!" data-start="5003" data-end="5040"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ10">git</span><span> clone <your-repo-url></span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Move into the project folder:

<pre class="overflow-visible! px-0!" data-start="5073" data-end="5109"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ10">cd</span><span> <project-folder-name></span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Install dependencies:

<pre class="overflow-visible! px-0!" data-start="5134" data-end="5157"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ10">npm</span><span> install</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Install project dependencies if needed:

<pre class="overflow-visible! px-0!" data-start="5200" data-end="5246"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ10">npm</span><span> install axios bootstrap lodash</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Install development tools if needed:

<pre class="overflow-visible! px-0!" data-start="5286" data-end="5384"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ10">npm</span><span> install </span><span class="ͼ12">--save-dev</span><span> live-server eslint stylelint stylelint-config-standard htmlhint</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Environment Variables

Before running the app locally, create a `.env` file in the project root and add:

```bash
VITE_LOTR_API_TOKEN=your_api_token_here
```

Make sure `.env` is included in `.gitignore`.

Refer to the following file for an example.

```
.env.example
```


## API Token Setup

This project uses The One API, which requires a Bearer token.

For security, the API token should not be hardcoded directly into the JavaScript source file.

Create a local environment file in the project root:

```bash
.env
```

Add your API token:

<pre class="overflow-visible! px-0!" data-start="496" data-end="547"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ11">VITE_LOTR_API_TOKEN</span><span class="ͼv">=</span><span>your_api_token_here</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Then access it in the API service file using Vite’s environment variable format:

<pre class="overflow-visible! px-0!" data-start="631" data-end="695"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼv">const</span><span></span><span class="ͼ11">API_TOKEN</span><span></span><span class="ͼv">=</span><span></span><span class="ͼv">import.</span><span>meta</span><span class="ͼv">.</span><span>env</span><span class="ͼv">.</span><span>VITE_LOTR_API_TOKEN;</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

The request sends the token in the `Authorization` header:

<pre class="overflow-visible! px-0!" data-start="757" data-end="803"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ13">Authorization</span><span>: </span><span class="ͼz">`Bearer </span><span>${</span><span class="ͼ11">API_TOKEN</span><span>}</span><span class="ͼz">`</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

The `.env` file should be listed in `.gitignore` so the token is not committed to GitHub.

## Security Note

This project was updated to remove the API token from the source code.

The token is now loaded from an environment variable during local development. This keeps the real key out of the GitHub repository.

Before deploying, the token should also be added through the hosting provider’s environment variable settings, such as Netlify or Vercel project settings.

## Available Scripts

Start the local development server:

<pre class="overflow-visible! px-0!" data-start="5990" data-end="6013"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ10">npm</span><span> run dev</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This launches the project locally with Live Server.

Run the environment check script:

<pre class="overflow-visible! px-0!" data-start="6103" data-end="6154"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ10">node</span><span> scripts/services/checkEnv.js hello</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This prints basic Node environment information, including the Node version, current working directory, command line arguments, and platform.

## Screenshots

Screenshots are organized into folders:

<pre class="overflow-visible! px-0!" data-start="6355" data-end="6450"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>screenshots/final/</span><br/><span>screenshots/oopsies/</span><br/><span>screenshots/postman/</span><br/><span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

The `oopsies` folder includes earlier layout issues from development, including a search result layout that stacked too tall before the flexbox wrapping was improved.

## Future Improvements

Planned or possible updates:

* Deploy the project with Netlify, Vercel, or GitHub Pages
* Add pagination for larger result sets
* Improve how missing or `null` API fields display
* Move the API token out of the frontend code
* Add a default character suggestion list
* Add a clear search/reset button
* Add better mobile spacing and card sizing
* Add accessible focus states for keyboard navigation
* Add a small “recent searches” feature
* Consider refactoring the styling into Tailwind CSS

## Bootstrap vs. Tailwind Note

This project currently uses Bootstrap, which is useful to keep because it shows experience working with a component and utility framework outside of Tailwind.

A future Tailwind refactor could be worthwhile, especially to improve theme control and custom styling, but I would keep the Bootstrap version first and focus on portfolio polish, deployment, pagination, and token handling before rewriting the CSS framework.

## Resources

* The One API documentation

  [https://the-one-api.dev/](https://the-one-api.dev/)
* REST APIs for Absolute Beginners

  [https://rike.dev/blog/rest-apis-for-absolute-beginners](https://rike.dev/blog/rest-apis-for-absolute-beginners)
* Postman

  [https://www.postman.com/](https://www.postman.com/)
* Bootstrap Documentation

  [https://getbootstrap.com/docs/](https://getbootstrap.com/docs/)
* GitHub Actions Documentation

  [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
* CSS Gradient Generator

  [https://cssgradient.io/](https://cssgradient.io/)
* CodeX Level 3 API project requirements and examples
