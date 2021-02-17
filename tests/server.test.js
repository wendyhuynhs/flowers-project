const request = require("supertest");
require("regenerator-runtime/runtime");

const app = require("../server/app.js");

describe("Test get request", () => {
  test("it should return with status of 200", async () => {
    const response = await request(app).get("/api/getPosts");

    expect(response.statusCode).toBe(200);
  });
  test("it should return with 100 records", async () => {
    const response = await request(app).get("/api/getPosts");
    expect(response.body.length).toBe(100);
  });
});
