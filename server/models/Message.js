const db = require('../configs/database');

class Message {

  static async getAllMessages() {
    try {
      db.getConnection((err, connection) => {
        if (err) {
          console.error('Erro ao obter conexão:', err);
          return { error: 'Erro interno do servidor' };
        }

        const query = 'CALL GetMessage()';
        connection.query(query, (error, results) => {
          connection.release();

          if (error) {
            console.error('Erro ao executar a consulta:', error);
            return { error: 'Erro interno do servidor' };
          }

          return results;
        });
      });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      return { error: 'Erro interno do servidor' };
    }
  }

  static async createMessage(req) {
    try {
      const { userId, content, nomeDestinatario, serieEscolhida, cursoEscolhido, periodo, dica, corBilhete, formaCartinha, formaPagamento } = req.body;
      const createdAt = new Date();

      db.getConnection((err, connection) => {
        if (err) {
          console.error('Erro ao obter conexão:', err);
          return { error: 'Erro interno do servidor' };
        }

        const query = 'INSERT INTO message (user_id, content, created_at, nome_destinatario, serie_escolhida, curso_escolhido, periodo, dica, cor_bilhete, forma_cartinha, forma_pagamento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [userId, content, createdAt, nomeDestinatario, serieEscolhida, cursoEscolhido, periodo, dica, corBilhete, formaCartinha, formaPagamento];

        connection.query(query, values, (error) => {
          connection.release();

          if (error) {
            console.error('Erro ao executar a consulta:', error);
            return { error: 'Erro interno do servidor' };
          }

          return { message: 'Dados inseridos com sucesso' };
        });
      });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      return { error: 'Erro interno do servidor' };
    }
  }

  static async updateMessage(req, res) {
    try {
      const { message_id, nome_destinatario, serie_escolhida, curso_escolhido, periodo, dica, cor_bilhete, forma_cartinha, forma_pagamento } = req.body;
  
      db.getConnection((err, connection) => {
        if (err) {
          console.error('Erro ao obter conexão:', err);
          return { error: 'Erro interno do servidor' };
        }
  
        const query = 'UPDATE message SET nome_destinatario = ?, serie_escolhida = ?, curso_escolhido = ?, periodo = ?, dica = ?, cor_bilhete = ?, forma_cartinha = ?, forma_pagamento = ? WHERE message_id = ?';
        const values = [nome_destinatario, serie_escolhida, curso_escolhido, periodo, dica, cor_bilhete, forma_cartinha, forma_pagamento, message_id];
  
        connection.query(query, values, (error) => {
          connection.release();
  
          if (error) {
            console.error('Erro ao executar a consulta:', error);
            return { error: 'Erro interno do servidor' };
          }
  
          return { message: 'Dados atualizados com sucesso' };
        });
      });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      return { error: 'Erro interno do servidor' };
    }
  }

  static async deleteMessage(message_id) {
      try {
        db.getConnection((err, connection) => {
          if (err) {
            console.error('Erro ao obter conexão:', err);
            return { error: 'Erro interno do servidor' };
          }

          const query = 'CALL UpdateMessageStatus(?)';
          const values = [message_id];

          connection.query(query, values, (error, results) => {
            connection.release();

            if (error) {
              console.error('Erro ao executar a consulta:', error);
              return { error: 'Erro interno do servidor' };
            }

            if (results.affectedRows === 0) {
              return { error: 'ID inválido' };
            }

            return res.json({ message: 'Deletado com sucesso' });
          });
        });
      } catch (error) {
        console.error('Erro ao executar a consulta:', error);
        return { error: 'Erro interno do servidor' };
      }
  }
}

module.exports = Message;