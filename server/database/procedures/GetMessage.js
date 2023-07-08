const db = require('../configs/database'); 

const sql = `
  DELIMITER $$

  CREATE PROCEDURE GetMessage()
  BEGIN
    SELECT * FROM message;
  END $$

  DELIMITER ;
`;

db.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao obter conexão do pool:', err);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }

  connection.query(sql, (err, results) => {
    connection.release(); // Libere a conexão para o pool

    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    res.json(results);
  });
});