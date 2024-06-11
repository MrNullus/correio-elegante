const app  = require('./app');
const CONFIGS = require('./configs/');

app.listen(CONFIGS.SERVER_PORT, () => {
  console.log('Servidor iniciado na porta 3000');
});

