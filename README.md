# Working with the repo

## Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)

## Local development setup

1. Install dependencies:
   - `npm install`

2. Start local development (webpack watch mode):
   - `npm run start`

This will build assets and keep watching for changes.

## Build a new dist version

Run a production build:

- `npm run build`

The compiled files are emitted to the `dist/` folder.

## Optional: Github pages deploy helper

There is a convenience script that builds and pushes the repo, so that it would update Github pages for the staging env

- `npm run deploy`

## Placing of dist files into Webflow

Webflow website uses plain css and js code for production. In order to properly use it, contents of the files should be placed in the 
folowwing places:
- initial.css and initial.js: site settings -> custom code -> head code
- common.css and common.js: site settings -> custom code -> footer code
- page-specific .css and .js files: page editing -> script prod HTML element at the bottom of the page
