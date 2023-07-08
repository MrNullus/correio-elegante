const db = require('../configs/database');

class CorreioController {

  // Método para selecionar todos os dados da tabela
  selectAll(req, res) {
    db.getConnection((err, connection) => {
      if (err) {
        console.error('Erro ao obter conexão do pool:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }

      connection.query('CALL GetMessage();', (err, results) => {
        connection.release(); 

        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        res.json(results);
      });
    });
  }

  // Método para inserir dados na tabela
  insertData(req, res) {
    const { user_id, content } = req.body;
    const created_at = new Date();

    db.getConnection((err, connection) => {
      if (err) {
        console.error('Erro ao obter conexão do pool:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }

      const query = 'INSERT INTO message (user_id, content, created_at) VALUES (?, ?, ?)';
      const values = [user_id, content, created_at];

      connection.query(query, values, (err, results) => {
        connection.release();

        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        res.json({ message: 'Dados inseridos com sucesso' });
      });
    });
  }

  // Método para atualizar dados na tabela
  updateData(req, res) {
    const { message_id, content } = req.body;

    db.getConnection((err, connection) => {
      if (err) {
        console.error('Erro ao obter conexão do pool:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }

      const query = 'UPDATE message SET content = ? WHERE message_id = ?';
      const values = [content, message_id];

      connection.query(query, values, (err, results) => {
        connection.release(); 

        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        res.json(values);
      });
    });
  }

  deleteData(req, res) {
    const message_id = req.params.message_id;
  
    db.getConnection((err, connection) => {
      if (err) {
        console.error('Erro ao obter conexão do pool:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
  
      const query = 'UPDATE message SET status = "desativado" WHERE message_id = ?';
      const values = [message_id];
  
      connection.query(query, values, (err, results) => {
        connection.release();

        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
  
        res.json(message_id);
      });
    });
  }
  
}

module.exports = CorreioController;
