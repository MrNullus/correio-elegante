const Message = require('../models/Message');

class CorreioController {
  /**
   * Obtém todos os correios elegantes.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Lista de correios elegantes.
   */
  async selectAll(req, res) {
    let result = await Message.getAllMessages();
    res.json(result);
  }

  /**
   * Insere um novo correio elegante.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async insertData(req, res) {
    let result = await Message.createMessage(req);
    res.json(result);
  }

  /**
   * Atualiza um correio elegante pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async updateData(req, res) {
    let result = await Message.updateMessage(req);
    res.json(result);
  }

  /**
   * Desativa um correio elegante pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async deleteData(req, res) {
    const { messageId } = req.params;
    await Message.deleteMessage(messageId);

    res.json(result);
  }
}

module.exports = CorreioController;
