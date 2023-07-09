const db = require('../configs/database');

const procedure_get_message = require('./GetMessage');
const procedure_update_message_status = require('./UpdateMessageStatus');

const sql = `
  ${procedure_update_message_status}

  ${procedure_get_message}
`;

db.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao obter conexão do pool:', err);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }

  connection.query(sql, (err, results) => {
    connection.release(); 

    if (err) {
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    res.json(results);
  });
});