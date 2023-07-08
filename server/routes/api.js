const express = require('express');
const router = express.Router();

const CorreioController = require('../controllers/CorreioController');
const correioController = new CorreioController();


/**
 * @swagger
 * /api/correio-elegante:
 *   get:
 *     summary: Obtém todos os correios elegantes.
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
 router.get('/api/correio-elegante', correioController.selectAll);

 
 /**
 * @swagger
 * /api/correio-elegante:
 *   post:
 *     summary: Insere um novo correio elegante.
 *     requestBody:
 *       description: Dados do correio elegante a ser inserido.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: ID do usuário.
 *               content:
 *                 type: string
 *                 description: Conteúdo do correio elegante.
 *             example:
 *               user_id: 1
 *               content: "Olá! Este é um correio elegante."
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
router.post('/api/correio-elegante', correioController.insertData);


/**
 * @swagger
 * /api/correio-elegante:
 *   put:
 *     summary: Atualiza um correio elegante pelo ID.
 *     requestBody:
 *       description: Dados do correio elegante a serem atualizados.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message_id:
 *                 type: integer
 *                 description: ID do correio elegante a ser atualizado.
 *               content:
 *                 type: string
 *                 description: Conteúdo do correio elegante.
 *             example:
 *               message_id: 2
 *               content: "Conteúdo atualizado do correio elegante."
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
 router.put('/api/correio-elegante', correioController.updateData);


/**
 * @swagger
 * /api/correio-elegante/{message_id}:
 *   delete:
 *     summary: Desativa um correio elegante pelo ID.
 *     parameters:
 *       - in: path
 *         name: message_id
 *         required: true
 *         description: ID do correio elegante a ser desativado.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
 router.delete('/api/correio-elegante/:message_id', correioController.deleteData);



module.exports = router;
