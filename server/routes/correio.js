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
 router.get('/', correioController.selectAll);


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
 *               status:
 *                 type: string
 *                 description: Status do correio elegante.
 *               created_at:
 *                 type: string
 *                 format: date-time
 *                 description: Data de criação do correio elegante.
 *               nome_destinatario:
 *                 type: string
 *                 description: Nome do destinatário.
 *               serie_escolhida:
 *                 type: integer
 *                 description: Série escolhida.
 *               curso_escolhido:
 *                 type: string
 *                 description: Curso escolhido.
 *               periodo:
 *                 type: string
 *                 description: Período do correio elegante.
 *               dica:
 *                 type: string
 *                 description: Dica do correio elegante.
 *               cor_bilhete:
 *                 type: string
 *                 description: Cor do bilhete.
 *               forma_cartinha:
 *                 type: string
 *                 description: Forma de envio do correio elegante.
 *               forma_pagamento:
 *                 type: string
 *                 description: Forma de pagamento do correio elegante.
 *             example:
 *               user_id: 1
 *               content: "Conteúdo do correio elegante."
 *               status: "ativo"
 *               created_at: "2023-07-31T23:34:40.000Z"
 *               nome_destinatario: "Nome do destinatário"
 *               serie_escolhida: 0
 *               curso_escolhido: "Curso escolhido"
 *               periodo: "Período do correio elegante"
 *               dica: "Dica do correio elegante"
 *               cor_bilhete: "Cor do bilhete"
 *               forma_cartinha: "Forma de envio do correio elegante"
 *               forma_pagamento: "Forma de pagamento do correio elegante"
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
router.post('/', correioController.insertData);


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
 *               nome_destinatario:
 *                 type: string
 *                 description: Nome do destinatário do correio elegante.
 *               serie_escolhida:
 *                 type: string
 *                 description: Série escolhida do correio elegante.
 *               curso_escolhido:
 *                 type: string
 *                 description: Curso escolhido do correio elegante.
 *               periodo:
 *                 type: string
 *                 description: Período do correio elegante.
 *               dica:
 *                 type: string
 *                 description: Dica do correio elegante.
 *               cor_bilhete:
 *                 type: string
 *                 description: Cor do bilhete do correio elegante.
 *               forma_cartinha:
 *                 type: string
 *                 description: Forma de envio da cartinha do correio elegante.
 *               forma_pagamento:
 *                 type: string
 *                 description: Forma de pagamento do correio elegante.
 *             example:
 *               message_id: 2
 *               nome_destinatario: "Nome atualizado"
 *               serie_escolhida: "Série atualizada"
 *               curso_escolhido: "Curso atualizado"
 *               periodo: "Período atualizado"
 *               dica: "Dica atualizada"
 *               cor_bilhete: "Cor atualizada"
 *               forma_cartinha: "Forma de envio atualizada"
 *               forma_pagamento: "Forma de pagamento atualizada"
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
 router.put('/', correioController.updateData);



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
 router.delete('/:message_id', correioController.deleteData);


module.exports = router;
