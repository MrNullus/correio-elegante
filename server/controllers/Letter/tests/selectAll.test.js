const request = require("supertest");
const app = require("../../../app");
const Repositorio = require("../repositorie/");

describe("Validação das funcionalidades do LetterController", () => {

  test("Obter todos os Correios Elegantes (GET /api/correio-elegante/letters/)", async () => {
    //const response = await request(app).get("/api/correio-elegante/letters/");
    // expect(response.statusCode).toBe(200);
    console.log(Repositorio);
  });

});
