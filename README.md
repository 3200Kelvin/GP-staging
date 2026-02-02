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
