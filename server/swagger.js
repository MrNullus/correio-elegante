const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API do Correio Elegante',
      version: '1.0.0',
      description: 'Documentação da API do Correio Elegante',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Substitua pela URL do seu servidor
      },
    ],
  },
  apis: ['./routes/*.js'], // Substitua pelo caminho correto dos seus arquivos de rotas
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
