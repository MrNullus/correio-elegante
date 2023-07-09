const express = require('express')
const router = express.Router();

const UserController = require('../controllers/UserController');
const userController = new UserController();


/**
 * @swagger
 * /api/correio-elegante/user:
 *   post:
 *     summary: Cria um novo usuário.
 *     requestBody:
 *       description: Dados do usuário a serem inseridos.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: Nome do usuário.
 *               lastname:
 *                 type: string
 *                 description: Sobrenome do usuário.
 *               nick:
 *                 type: string
 *                 description: Apelido do usuário.
 *               email:
 *                 type: string
 *                 description: Email do usuário.
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *             example:
 *               firstname: John
 *               lastname: Doe
 *               nick: johndoe
 *               email: john@example.com
 *               password: 123456
 *     responses:
 *       '201':
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *                 userId:
 *                   type: integer
 *                   description: ID do usuário criado.
 *       '500':
 *         description: Erro interno do servidor.
 */
 router.post('/', userController.createUser);


 /**
  * @swagger
  * /api/correio-elegante/user:
  *   get:
  *     summary: Obtém todos os usuários.
  *     responses:
  *       '200':
  *         description: OK.
  *       '500':
  *         description: Erro interno do servidor.
  */
 router.get('/', userController.getAllUsers);
 

 /**
  * @swagger
  * /api/correio-elegante/user/{id}:
  *   get:
  *     summary: Obtém um usuário pelo ID.
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: ID do usuário.
  *         schema:
  *           type: integer
  *     responses:
  *       '200':
  *         description: OK.
  *       '404':
  *         description: Usuário não encontrado.
  *       '500':
  *         description: Erro interno do servidor.
  */
 router.get('/:id', userController.getUserById);

 
 /**
  * @swagger
  * /api/correio-elegante/user/{id}:
  *   put:
  *     summary: Atualiza um usuário pelo ID.
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: ID do usuário.
  *         schema:
  *           type: integer
  *     requestBody:
  *       description: Dados do usuário a serem atualizados.
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               firstname:
  *                 type: string
  *                 description: Nome do usuário.
  *               lastname:
  *                 type: string
  *                 description: Sobrenome do usuário.
  *               nick:
  *                 type: string
  *                 description: Apelido do usuário.
  *               email:
  *                 type: string
  *                 description: Email do usuário.
  *               password:
  *                 type: string
  *                 description: Senha do usuário.
  *             example:
  *               firstname: John
  *               lastname: Doe
  *               nick: johndoe
  *               email: john@example.com
  *               password: 123456
  *     responses:
  *       '200':
  *         description: Usuário atualizado com sucesso.
  *       '404':
  *         description: Usuário não encontrado.
  *       '500':
  *         description: Erro interno do servidor.
  */
 router.put('/:id', userController.updateUser);
 

 /**
  * @swagger
  * /api/correio-elegante/user/{id}:
  *   delete:
  *     summary: Exclui um usuário pelo ID.
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: ID do usuário.
  *         schema:
  *           type: integer
  *     responses:
  *       '200':
  *         description: Usuário excluído com sucesso.
  *       '404':
  *         description: Usuário não encontrado.
  *       '500':
  *         description: Erro interno do servidor.
  */
 router.delete('/:id', userController.deleteUser);
 

module.exports = router;
