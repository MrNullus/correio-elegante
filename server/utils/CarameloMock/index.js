const { faker } = require('@faker-js/faker');

class CarameloMock {
  configs = {
    quantidadeDeDados: 5,
    entidade: { 'nome': {tipo: 'username' } }
  };
  entidadesSimuladas = [];

  configurar(configs) {
    this.configs = configs;
  }
  obterDadoPeloTipo(tipo) {
    let dadoGerado;
    switch (tipo) {
      case 'username':
        dadoGerado = faker.internet.userName();
        break;

      default:
        break;
    }
    return dadoGerado;
  }

  gerarEntidade() {
    for (let propriedade in this.configs.entidade) {
      let tipo = this.configs.entidade[propriedade].tipo;
      let dadoSimulado = this.obterDadoPeloTipo(tipo);

      let novaEntidade = {};
      novaEntidade[propriedade] = dadoSimulado;
      this.entidadesSimuladas.push(novaEntidade);
    }
    
    return this.entidadesSimuladas;
  }

  gerarEntidadesApartirDaEntidade(entidade) {
    let entidades = []

    for (let i = 0; i <= this.configs.quantidadeDeDados; i++) {
      entidades.push(entidade);
    }

    return entidades;
  }

}

module.exports = new CarameloMock();
