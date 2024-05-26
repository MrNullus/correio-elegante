const express = require('express');
const router = express.Router();

const LetterController = require('../controllers/LetterController');


/**
 * @swagger
 * tags:
 *   name: Letters
 *   description: API para gerenciamento dos Correios Elegantes.
 */

/**
 * @swagger
 * /api/correio-elegante/letters/:
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
 * /api/correio-elegante/letters/payoff/{uid}/:
 *   get:
 *      summary: Faz o pagamento de um Correio.
 *      tags: [Letters]
 *      parameters:
 *        - in: path
 *          name: uid
 *          required: true
 *          description: UID do Correio.
 *      responses:
 *       '200':
 *         description: Correio Elegante encontrado com sucesso.
 *       '404':
 *         description: Correio Elegante não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
*/
//router.get('/payoff/:uid', LetterController.payoff);

/**
 * @swagger
 * /api/correio-elegante/letters/{uid}/:
 *   get:
 *     summary: Seleciona um Correio Elegante pelo UID.
 *     tags: [Letters]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: UID (Unique Identifier) do Correio Elegante.
 *     responses:
 *       '200':
 *         description: Correio Elegante encontrado com sucesso.
 *       '404':
 *         description: Correio Elegante não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/:uid', LetterController.selectByUID);


/**
 * @swagger
 * /api/correio-elegante/letters/:
 *   post:
 *     summary: Insere uma nova carta elegante.
 *     tags: [Letters]
 *     requestBody:
 *       description: Dados da carta elegante a ser cadastrada.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               head:
 *                 type: object
 *                 properties:
 *                    id:  
 *                      type: integer  
 *                      description: ID do correio elegante (gerado automaticamente)
 *                    uid:   
 *                      type: string
 *                      description: UID do correio elegante
 *                    created_at:
 *                      type: string  
 *                      format: date-time
 *                      description: Data de Criação (gerada automaticamente)
 *                    updated_at:    
 *                      type: string  
 *                      format: date-time
 *                      description: Data de Atualização (gerada automaticamente)
 *                    type:   
 *                      type: string
 *                      description: Tipo do Correio Elegante
 *
 *               payment:
 *                 type: object  
 *                 properties:
 *                   method:   
 *                     type: string
 *                     description: Método de pagamento
 *                   status:   
 *                     type: boolean
 *                     description: Status do pagamento
 *                   price:   
 *                     type: number
 *                     description: Valor a ser pago

 *               style:   
 *                 type: object  
 *                 properties:
 *                   theme:   
 *                     type: string
 *                     description: Tema do Correio
 *                   description_style:   
 *                     type: string
 *                     description: Descrição do estilo do Correio
 *                   shape:   
 *                     type: string
 *                     description: Forma do Correio
 *                   color:   
 *                     type: string
 *                     description: Cor do Correio
 *               recipient:   
 *                 type: object   
 *                 properties:
 *                   name:   
 *                     type: string
 *                     description: Nome do destinatário
 *                   serie:   
 *                     type: string
 *                     description: Série
 *                   course:   
 *                     type: string
 *                     description: Curso
 *                   turn:   
 *                     type: string
 *                     description: Turno
 *               body:   
 *                 type: object  
 *                 properties:
 *                   message:   
 *                     type: string
 *                     description: Mensagem do Correio
 *                   tips:   
 *                     type: string
 *                     description: Dicas de quem enviou o Correio
 *     responses:
 *       '200':
 *         description: Carta elegante inserida com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/', LetterController.insertData);


/**
 * @swagger
 * /api/correio-elegante/letters/{uid}/:
 *   put:
 *     summary: Atualiza uma carta elegante pelo UID.
 *     tags: [Letters]
 *     requestBody:
 *       description: Dados da carta elegante a serem atualizados.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               head:
 *                 type: object
 *                 properties:
 *                    id:  
 *                      type: integer  
 *                      description: ID do correio elegante (gerado automaticamente)
 *                    uid:   
 *                      type: string
 *                      description: UID do correio elegante
 *                    created_at:
 *                      type: string  
 *                      format: date-time
 *                      description: Data de Criação (gerada automaticamente)
 *                    updated_at:    
 *                      type: string  
 *                      format: date-time
 *                      description: Data de Atualização (gerada automaticamente)
 *                    type:   
 *                      type: string
 *                      description: Tipo do Correio Elegante
 *
 *               payment:
 *                 type: object  
 *                 properties:
 *                   method:   
 *                     type: string
 *                     description: Método de pagamento
 *                   status:   
 *                     type: boolean
 *                     description: Status do pagamento
 *                   price:   
 *                     type: number
 *                     description: Valor a ser pago

 *               style:   
 *                 type: object  
 *                 properties:
 *                   theme:   
 *                     type: string
 *                     description: Tema do Correio
 *                   description_style:   
 *                     type: string
 *                     description: Descrição do estilo do Correio
 *                   shape:   
 *                     type: string
 *                     description: Forma do Correio
 *                   color:   
 *                     type: string
 *                     description: Cor do Correio
 *               recipient:   
 *                 type: object   
 *                 properties:
 *                   name:   
 *                     type: string
 *                     description: Nome do destinatário
 *                   serie:   
 *                     type: string
 *                     description: Série
 *                   course:   
 *                     type: string
 *                     description: Curso
 *                   turn:   
 *                     type: string
 *                     description: Turno
 *               body:   
 *                 type: object  
 *                 properties:
 *                   message:   
 *                     type: string
 *                     description: Mensagem do Correio
 *                   tips:   
 *                     type: string
 *     responses:
 *       '200':
 *         description: Carta elegante atualizada com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.put('/:uid', LetterController.updateData);


/**
 * @swagger
 * /api/correio-elegante/letters/{uid}/:
 *   delete:
 *     summary: Deleta uma carta elegante pelo UID.
 *     tags: [Letters]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: UID da carta elegante a ser deletada.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Carta elegante deletada com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.delete('/:uid', LetterController.deleteData);

module.exports = router;
