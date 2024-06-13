const CarameloMock = require('../../../utils/CarameloMock');
const Iara = require('../../../utils/Iara');

const configs = {
  quantidadeDeDados: 5,
};

CarameloMock.configurar(configs);

class Repositorio {
  entidade =  {
    "body": {
      "message": "string",
      "tips": "string"
    },
    "head": {
      "created_at": "2024-06-03T03:31:42.698Z",
      "type": "string",
      "uid": Iara.generateUID(),
      "updated_at": "2024-06-03T03:31:42.698Z"
    },
    "payment": {
      "method": "string",
      "price": 0,
      "status": true
    },
    "recipient": {
      "course": "string",
      "name": "string",
      "serie": "string",
      "turn": "string"
    },
    "style": {
      "color": "string",
      "description_style": "string",
      "shape": "string",
      "theme": "string"
    }
  }
  dadosCadastrados = [];

  constructor() {
    this.dadosSimulados = CarameloMock.gerarEntidadesApartirDaEntidade(this.entidade);
  }

  cadastrarDado(dado) {
    this.dadosCadastrados.push(dado);
  }

  getDadoAleatorio() {
    const dadoAleatorio = this.dadosSimulados[Math.floor(Math.random() * this.dadosSimulados.length)];
    this.cadastrarDado(dadoAleatorio);

    return dadoAleatorio;
  }

  getTodosDadosSimulados() {
    return this.dadosSimulados;
  }

  getDadoCadastradoAleatorio() {
    const dadoCadastradoAleatorio =  this.dadosCadastrados[Math.floor(Math.random() * this.dadosCadastrados.length)];

    return dadoCadastradoAleatorio;
  }

}

module.exports = new Repositorio()
