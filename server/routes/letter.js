const express = require('express');
const router = express.Router();

const LetterController = require('../controllers/LetterController');

/**
 * @swagger
 * tags:
 *   name: Letters
 *   description: API para gerenciamento de cartas elegantes.
 */

/**
 * @swagger
 * /api/correio-elegante/letters:
 *   get:
 *     summary: Obtém todas as cartas elegantes.
 *     tags: [Letters]
 *     responses:
 *       '200':
 *         description: Lista de cartas elegantes.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/', LetterController.selectAll);


/**
 * @swagger
 * /api/correio-elegante/letters:
 *   post:
 *     summary: Insere uma nova carta elegante.
 *     tags: [Letters]
 *     requestBody:
 *       description: Dados da carta elegante a ser inserida.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message_id:
 *                 type: integer
 *                 description: ID da menssagem
 *               forma_carta_id:
 *                 type: integer
 *                 description: Forma da carta
 *               cor_carta_id:
 *                 type: integer
 *                 description: Série escolhida.
 *               valor:
 *                 type: float
 *                 description: Curso escolhido.
 *               forma_pagamento:
 *                 type: string
 *                 description: Período.
 *               created_at:
 *                 type: string
 *                 format: date-time
 *                 description: Data Criação
 *             example:
 *               message_id: 1
 *               forma_carta_id: 1
 *               cor_carta_id: 1
 *               valor: 2.5
 *               forma_pagamento: "Fisico"
 *               created_at: "2023-07-31T23:34:40.000Z"
 *        
 *     responses:
 *       '200':
 *         description: Carta elegante inserida com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/', LetterController.insertData);

/**
 * @swagger
 * /api/correio-elegante/letters:
 *   put:
 *     summary: Atualiza uma carta elegante pelo ID.
 *     tags: [Letters]
 *     requestBody:
 *       description: Dados da carta elegante a serem atualizados.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               letter_id:
 *                 type: integer
 *                 description: ID da carta elegante a ser atualizada.
 *               content:
 *                 type: string
 *                 description: Conteúdo da carta.
 *             example:
 *               letter_id: 1
 *               content: "Novo conteúdo da carta."
 *     responses:
 *       '200':
 *         description: Carta elegante atualizada com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.put('/', LetterController.updateData);

/**
 * @swagger
 * /api/correio-elegante/letters/{letter_id}:
 *   delete:
 *     summary: Deleta uma carta elegante pelo ID.
 *     tags: [Letters]
 *     parameters:
 *       - in: path
 *         name: letter_id
 *         required: true
 *         description: ID da carta elegante a ser deletada.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Carta elegante deletada com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.delete('/:letter_id', LetterController.deleteData);

module.exports = router;
