const express = require('express');
const router = express.Router();

const MessageController = require('../controllers/MessageController');

/**
 * @swagger
 * tags:
 *   name: Message
 *   description: API para gerenciamento das mensagens.
 */


/**
 * @swagger
 * /api/correio-elegante/message:
 *   get:
 *     summary: Obtém todos as mensagens.
 *     tags: [Message]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
 router.get('/', MessageController.selectAll);


 /**
 * @swagger
 * /api/correio-elegante/message/no-active:
 *   get:
 *     summary: Obtém todos as mensagens não ativados.
 *     tags: [Message]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
  router.get('/no-active', MessageController.selecAllNotActive);


/**
 * @swagger
 * /api/correio-elegante/message:
 *   post:
 *     summary: Insere um nova menssagem.
 *     tags: [Message]
 *     requestBody:
 *       description: Dados da menssagem a ser inserido.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario_id:
 *                 type: integer
 *                 description: ID do usuario
 *               content:
 *                 type: string
 *                 description: Conteúdo da menssagem.
 *               status:
 *                 type: string
 *                 description: Status da menssagem.
 *               created_at:
 *                 type: string
 *                 format: date-time
 *                 description: Data de criação da menssagem.
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
 *                 description: Período da menssagem.
 *               dica:
 *                 type: string
 *                 description: Dica da menssagem.
 *             example:
 *               usuario_id: 1
 *               content: "Conteúdo da menssagem."
 *               status: "ativo"
 *               created_at: "2023-07-31T23:34:40.000Z"
 *               nome_destinatario: "Nome do destinatário"
 *               serie_escolhida: 3
 *               curso_escolhido: "Curso escolhido"
 *               periodo: "Período da menssagem"
 *               dica: "Dica da menssagem"
 *               cor_bilhete: "Cor do bilhete"
 *               forma_cartinha: "Forma de envio da menssagem"
 *               forma_pagamento: "Forma de pagamento da menssagem"
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
router.post('/', MessageController.insertData);


/**
 * @swagger
 * /api/correio-elegante/message:
 *   put:
 *     summary: Atualiza ua menssagem pelo ID.
 *     tags: [Message]
 *     requestBody:
 *       description: Dados da menssagem a serem atualizados.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message_id:
 *                 type: integer
 *                 description: ID da menssagem a ser atualizado.
 *               nome_destinatario:
 *                 type: string
 *                 description: Nome do destinatário da menssagem.
 *               serie_escolhida:
 *                 type: string
 *                 description: Série escolhida da menssagem.
 *               curso_escolhido:
 *                 type: string
 *                 description: Curso escolhido da menssagem.
 *               periodo:
 *                 type: string
 *                 description: Período da menssagem.
 *               dica:
 *                 type: string
 *                 description: Dica da menssagem.
 *               cor_bilhete:
 *                 type: string
 *                 description: Cor do bilhete da menssagem.
 *               forma_cartinha:
 *                 type: string
 *                 description: Forma de envio da cartinha da menssagem.
 *               forma_pagamento:
 *                 type: string
 *                 description: Forma de pagamento da menssagem.
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
 router.put('/', MessageController.updateData);



/**
 * @swagger
 * /api/correio-elegante/message/{message_id}:
 *   delete:
 *     summary: Desativa ua menssagem pelo ID.
 *     tags: [Message]
 *     parameters:
 *       - in: path
 *         name: message_id
 *         required: true
 *         description: ID da menssagem a ser desativado.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
 router.delete('/:message_id', MessageController.deleteData);


module.exports = router;
