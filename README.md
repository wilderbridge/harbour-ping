# Harbour Ping

A deliberately tiny, disposable Node.js application for testing repository import,
platform preparation and complete decommissioning. It contains no real business data, database,
credentials, external API calls or persistent storage. It has no package dependencies.

## Run

Use Node.js 24, then `npm start`. Open http://localhost:8080/.
`GET /healthz` returns `{"status":"ok"}`. Run `npm run check` for the tests.

The public GitHub repository is the retained source for repeated import rehearsals. Decommissioning
the imported application should remove only its vended copy and application-specific platform
resources, while preserving other applications and the shared host.
