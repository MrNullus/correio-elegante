const FirebaseService = require("../services/firebase/index.jsx");
const LetterEntity = require("../entities/Letter.js");

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
   * Obtém o UID de uma carta.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Lista de cartas.
   */
  async selectByUID(request, response) {
    // Get UID by Request
    const letterUID = request.params.uid;

    // Retrive Letter by UID
    const letterFound = FirebaseService.db.getByPath(`letters/${letterUID}`);

    // Send Letter Found
    //console.log(letterUID);
    letterFound
      .then((letter) => { 
        if (letter.status === 404) {
          response.send('Correio não encontrado');
          return;
        }
        response.send({letter, status: 200});
      })
      .catch((error) => {
        response.send({ error: "Erro Inesperado", status: 404 });
      })
  }

  /**
   * Insere uma nova carta.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async insertData(request, response) {
    // Get data of request
    try {
      const data = request.body;
      LetterEntity.create(data);

      response.send({ status: 200, message: 'Carta elegante inserida com sucesso.' });
    } catch(error) {
      console.log(error);
      response.send({ status: 500, message: 'Erro interno do servidor.' })
    }
  }

  /**
   * Atualiza uma carta pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de resposta.
   */
  async updateData(request, response) {
    try {
      const data = request.body;
      LetterEntity.update(data);

      response.send({ status: 200, message: 'Carta elegante atualida com sucesso.' });
    } catch(error) {
      console.log(error);
      response.send({ status: 500, message: 'Erro interno do servidor.', error })
    }
  }

  /**
   * Deleta uma carta pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de resposta.
   */
  async deleteData(request, response) {
    try {
      const letterUID = request.params.uid;
      LetterEntity.delete(letterUID);

      response.send({ status: 200, message: 'Carta Elegante deletada com sucesso' });
    } catch(error) {
      console.log(error);
      response.send({ status: 500, message: 'Erro interno no servidor', error })
    }
  }
}

module.exports = new LetterController();
