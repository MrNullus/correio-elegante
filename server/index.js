const express = require("express");
const mysql = require("mysql");
const cors = require("cors"); 

const app = express();




app.use(express.json());
app.use(cors());

app.use(cors());

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});