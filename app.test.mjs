import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createApp } from "./server.mjs";

let app;
let base;
before(async () => {
  app = createApp();
  await new Promise((resolve) => app.listen(0, "127.0.0.1", resolve));
  base = `http://127.0.0.1:${app.address().port}`;
});
after(() => new Promise((resolve) => app.close(resolve)));

test("the home page explains this disposable application", async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /text\/html/);
  assert.match(await response.text(), /<h1>Harbour Ping<\/h1>/);
});
test("health is machine readable", async () => {
  const response = await fetch(`${base}/healthz`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "ok" });
});
test("unknown routes and unsupported methods are refused", async () => {
  assert.equal((await fetch(`${base}/missing`)).status, 404);
  assert.equal((await fetch(base, { method: "POST" })).status, 405);
});
