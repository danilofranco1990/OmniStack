const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); //Aqui estou referenciando o arquivo de controller

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

  module.exports = routes;

  /**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma irformação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */
  /**
   * Tipos de parâmetros
   * 
   * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
   * Route Params: Parâmetros utiilizados para identificar recursos
   * Request Body: Corppo da requisição, utilizado para criar ou alterar recursos
   */