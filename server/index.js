const express = require("express");
const cors = require("cors"); 

const CorreioController = require('./controllers/CorreioController');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/correio', CorreioController);  

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
}); 