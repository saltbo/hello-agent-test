const { describe, it, after } = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("./index");

describe("GET /health", () => {
  let server;
  let baseUrl;

  after(() => server.close());

  it("returns JSON with status ok and a timestamp", async () => {
    server = app.listen(0);
    const { port } = server.address();
    baseUrl = `http://localhost:${port}`;

    const res = await fetch(`${baseUrl}/health`);
    assert.strictEqual(res.status, 200);

    const body = await res.json();
    assert.strictEqual(body.status, "ok");
    assert.strictEqual(typeof body.timestamp, "number");
  });
});
