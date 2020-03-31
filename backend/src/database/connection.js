const knex = require('knex'); //Importando knex
const configuration = require('../../knexfile');//Importando configurações do banco de dados

const connection = knex(configuration.development);//Criando conexão utilizando o knex e passando como parametro o configuration.development "Que é a conexão de desenvolvimento"

//Exportando de dentro do arquivo a nossa conexão com o banco de dados
module.exports = connection;