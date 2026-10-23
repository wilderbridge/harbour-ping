export function renderPage() {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Harbour Ping</title>
<style>body{font-family:system-ui,sans-serif;max-width:36rem;margin:4rem auto;padding:0 1rem;line-height:1.6}main{border:1px solid #aaa;border-radius:1rem;padding:2rem}a{color:inherit}</style></head>
<body><main><h1>Harbour Ping</h1><p>A tiny disposable application for rehearsing repository import and decommissioning.</p><p>The service is afloat.</p><p><a href="/healthz">Check service health</a></p></main></body>
</html>`;
}
