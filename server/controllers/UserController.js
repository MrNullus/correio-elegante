
class UserController {

  /**
   * Obtém todos os usuários.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Lista de usuários.
   */
  async getAllUsers(req, res) {
    try {
      const query = 'SELECT * FROM user';
      db.query(query, (err, users) => {
        if (err) {
          console.error('Erro ao obter os usuários:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        res.json(users);
      });
    } catch (error) {
      console.error('Erro ao obter os usuários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }


  /**
   * Obtém um usuário pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Usuário encontrado.
   */
  async getUserById(req, res) {
    try {
      const user_id = req.params.id;

      const query = 'SELECT * FROM user WHERE user_id = ?';
      db.query(query, [user_id], (err, user) => {
        if (err) {
          console.error('Erro ao obter o usuário:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        if (user.length === 0) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(user[0]);
      });
    } catch (error) {
      console.error('Erro ao obter o usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }


  /**
   * Cria um novo usuário.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Usuário criado.
   */
   async createUser(req, res) {
    try {
      const { firstname, lastname, nick, email, password } = req.body;
  
      const checkQuery = 'SELECT * FROM user WHERE email = ?';
      db.query(checkQuery, [email], (err, users) => {
        if (err) {
          console.error('Erro ao verificar o usuário existente:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        if (users.length > 0) {
          // Usuário já existe
          return res.status(400).json({ error: 'O e-mail já está cadastrado' });
        }

        // Cria um novo usuário
        const data = [firstname, lastname, nick, email, password];
        const createQuery = 'INSERT INTO user (firstname, lastname, nick, email, password) VALUES (?, ?, ?, ?, ?)';
        db.query(createQuery, data, (err, result) => {
          if (err) {
            console.error('Erro ao criar o usuário:', err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
          }

          res.status(201).json({ message: 'Usuário criado com sucesso', userId: result.insertId });
        });
      });
    } catch (error) {
      console.error('Erro ao criar o usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  

  /**
   * Atualiza um usuário pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
  async updateUser(req, res) {
    try {
      const user_id = req.params.id;
      const { firstname, lastname, nick, email, password } = req.body;
      const query = 'UPDATE user SET firstname = ?, lastname = ?, nick = ?, email = ?, password = ? WHERE user_id = ?';
      const result = await db.query(query, [firstname, lastname, nick, email, password, user_id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      res.json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  
  /**
   * Exclui um usuário pelo ID.
   * @param {object} req - Objeto de requisição.
   * @param {object} res - Objeto de resposta.
   * @returns {object} - Mensagem de sucesso.
   */
   async deleteUser(req, res) {
    try {
      const user_id = req.params.id;
      const query = 'UPDATE user SET status = 0 WHERE user_id = ?';
      const result = await db.query(query, [user_id]);
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      res.json({ message: 'Usuário desativado com sucesso' });
    } catch (error) {
      console.error('Erro ao desativar o usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }  

}

module.exports = new UserController();

