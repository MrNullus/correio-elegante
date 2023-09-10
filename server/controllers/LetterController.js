const db = require('../configs/database');

class LetterController {
  /**
   * Obtém todas as cartas.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Lista de cartas.
   */
  async selectAll(req, res) {
    try {
      const query = 'SELECT * FROM letter';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        res.json(results);
      });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  /**
   * Insere uma nova carta.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async insertData(req, res) {
    try {
      const { message_id, forma_carta_id, cor_carta_id, valor, forma_pagamento } = req.body;

      const query = 'INSERT INTO letter (message_id, forma_carta_id, cor_carta_id, valor, forma_pagamento) VALUES (?, ?, ?, ?, ?)';
      const values = [message_id, forma_carta_id, cor_carta_id, valor, forma_pagamento];

      db.query(query, values, (err, result) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        res.json({ message: 'Dados inseridos com sucesso', res: result });
      });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  /**
   * Atualiza uma carta pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async updateData(req, res) {
    try {
      const { letter_id, message_id, forma_carta_id, cor_carta_id, valor, forma_pagamento } = req.body;

      const query = 'UPDATE letter SET message_id = ?, forma_carta_id = ?, cor_carta_id = ?, valor = ?, forma_pagamento = ? WHERE letter_id = ?';
      const values = [message_id, forma_carta_id, cor_carta_id, valor, forma_pagamento, letter_id];

      db.query(query, values, (err, result) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        res.json({ message: 'Dados atualizados com sucesso' });
      });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  /**
   * Deleta uma carta pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async deleteData(req, res) {
    try {
      const letter_id = req.params.letter_id;

      const query = 'DELETE FROM letter WHERE letter_id = ?';
      const values = [letter_id];

      db.query(query, values, (err, results) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        if (results.affectedRows === 0) {
          return res.status(500).json({ error: 'ID inválido' });
        }

        res.json({ message: 'Deletado com sucesso' });
      });
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

module.exports = new LetterController();
