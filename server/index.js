const express = require("express");
const cors = require("cors"); 

const router = require("./routes/api");

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);  

const swaggerSetup = require('./swagger');
swaggerSetup(app);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
}); 