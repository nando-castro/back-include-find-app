const request = require("supertest");
const { app, server } = require("../src/index");

describe("GET /items", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/items");
    expect(res.status).toBe(200);
  });
});

describe("POST /item", () => {
  it("should return 201 OK", async () => {
    const res = await request(app).post("/item").send({ name: "test" });
    expect(res.status).toBe(201);
  });
});

describe("GET /item/:name", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/item/test");
    expect(res.status).toBe(200);
  });
});

// No final dos testes, feche o servidor Express
afterAll((done) => {
  server.close((err) => {
    if (err) {
      console.error("Erro ao fechar o servidor Express:", err);
    } else {
      console.log("Servidor Express fechado com sucesso");
    }
    done();
  });
});
