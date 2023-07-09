const db = require('../configs/database');

class CorreioController {
  /**
   * Obtém todos os correios elegantes.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Lista de correios elegantes.
   */
  async selectAll(req, res) {
    try {
      const connection = await db.getConnection();

      const query = 'CALL GetMessage()';
      const [results] = await connection.query(query);

      connection.release();

      res.json(results);
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  /**
   * Insere um novo correio elegante.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async insertData(req, res) {
    try {
      const { userId, content, nomeDestinatario, serieEscolhida, cursoEscolhido, periodo, dica, corBilhete, formaCartinha, formaPagamento } = req.body;
      const createdAt = new Date();

      const connection = await db.getConnection();

      const query = 'INSERT INTO message (user_id, content, created_at, nome_destinatario, serie_escolhida, curso_escolhido, periodo, dica, cor_bilhete, forma_cartinha, forma_pagamento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const values = [userId, content, createdAt, nomeDestinatario, serieEscolhida, cursoEscolhido, periodo, dica, corBilhete, formaCartinha, formaPagamento];

      await connection.query(query, values);

      connection.release();

      res.json({ message: 'Dados inseridos com sucesso' });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  /**
   * Atualiza um correio elegante pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async updateData(req, res) {
    try {
      const { message_id, content } = req.body;

      const connection = await db.getConnection();

      const query = 'UPDATE message SET content = ? WHERE message_id = ?';
      const values = [content, message_id];

      await connection.query(query, values);

      connection.release();

      res.json({ message: 'Dados atualizados com sucesso' });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  /**
   * Desativa um correio elegante pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async deleteData(req, res) {
    try {
      const message_id = req.params.message_id;

      const connection = await db.getConnection();

      const query = 'CALL UpdateMessageStatus(?)';
      const values = [message_id];

      const [results] = await connection.query(query, values);

      connection.release();

      if (results.affectedRows === 0) {
        return res.status(500).json({ error: 'ID inválido' });
      }

      res.json({ message: 'Deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

module.exports = CorreioController;
