const { response } = require("express");
const FirebaseService = require("../services/firebase/index.jsx");


class LetterController {
  /**
   * Obtém todas as cartas.
   * @param {object} request - Objeto de requisição.
   * @param {object} response - Objeto de resposta.
   * @returns {object} - Lista de cartas.
   */
  async selectAll(request, response) {
    // Retrive Letters
    const letters = FirebaseService.db.getAllDataIn('letters');

    // Send letters
    letters
      .then((letter) => { 
        response.status(200).send(letter);
      })
      .catch((error) => {
        response.status(500).send({ error });
      })
  }

   /**
   * Obtém todas as cartas.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Lista de cartas.
   */
  async selectByID(req, res) {
    
  }

  /**
   * Insere uma nova carta.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async insertData(req, res) {
    
  }

  /**
   * Atualiza uma carta pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async updateData(req, res) {
   
  }

  /**
   * Deleta uma carta pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async deleteData(req, res) {
  }
}

module.exports = new LetterController();
