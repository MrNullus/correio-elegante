const request = require("supertest");
const app = require("../../../app");
const Repositorio = require("../repositorie/");
const CONFIGS = require("../../../configs");

describe("Validação das funcionalidades do LetterController", () => {

  test(`Criar Correio Elegante (POST ${CONFIGS.URL_BASE})`, async () => {
    const letter = Repositorio.getDadoAleatorio();
    console.log(Repositorio.getDadoAleatorio());

    await request(app)
      .post(CONFIGS.URL_BASE)
      .send(letter)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test(`Obter todos os Correios Elegantes (GET ${CONFIGS.URL_BASE})`, async () => {
    await request(app).get(CONFIGS.URL_BASE)
    .expect(200);
  });

  test(`Obter um unico Corrreio Elegante (GET ${CONFIGS.URL_BASE}:uid)`, async () => {
    const UID = Repositorio.getDadoAleatorio().head.uid;
    const response = await request(app).get(`${CONFIGS.URL_BASE}${UID}`);

    expect(response.statusCode).toBe(200);
  });

  test(`Atualizar Correio Elegante (UPDATE ${CONFIGS.URL_BASE}:uid)`, async () => {
    const letter =  Repositorio.getDadoCadastradoAleatorio();
    console.log(letter);
    letter.body.message = 'asadadad';
    
    await request(app).put(`${CONFIGS.URL_BASE}${letter.head.uid}`)
      .send(letter) 
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  test(`Deletar Correio Elegante (DELETE ${CONFIGS.URL_BASE}:uid)`, async () => {
    const UID = Repositorio.getDadoCadastradoAleatorio().head.uid;
    console.log(UID);
    
    await request(app).delete(`${CONFIGS.URL_BASE}${UID}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);      
  });
});
