exports.up = function(knex) { //Método up é o responsavel pela criação da tabela
  return knex.schema.createTable('ongs',function(table){
     table.string('id').primary();
     table.string('name').notNullable();
     table.string('email').notNullable();
     table.string('whatsapp').notNullable();
     table.string('city').notNullable();
     table.string('uf',2).notNullable();
   });
 };
 
 exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
 };
 
 /**Criando a table no terminal digite:
  * knex migrate:make nome_table
  * 
  * Executando a criação da table;
  *knex migrate:latest 
  **/
