const CarameloMock = require('../../../utils/CarameloMock');
let configs = {
  quantidadeDeDados: 5,
  entidade: { 'nome': {tipo: 'username' } }
};
CarameloMock.configurar(configs);

const Repositorio = CarameloMock.gerarEntidade();
module.exports = Repositorio;
