import { createServer } from "node:http";
import { renderPage } from "./page.mjs";

export function createApp() {
  return createServer((request, response) => {
    if (request.method !== "GET") {
      response.writeHead(405, { Allow: "GET" }).end();
      return;
    }
    if (request.url === "/healthz") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ status: "ok" }));
      return;
    }
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(renderPage());
      return;
    }
    response.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
  });
}

if (import.meta.main) {
  const port = Number(process.env.PORT ?? 8080);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT must be an integer between 1 and 65535.");
  }
  const app = createApp();
  app.listen(port, "0.0.0.0", () => console.log(`Harbour Ping listening on ${port}`));
  process.once("SIGTERM", () => app.close());
  process.once("SIGINT", () => app.close());
}
