exports.up = function(knex) {
  return knex.schema.createTable('incidents',function(table){
     table.increments();
     table.string('title').notNullable();
     table.string('description').notNullable();
  
     table.decimal('value').notNullable();
     table.string('ong_id').notNullable();
     table.foreign('ong_id').references('id').inTable('ongs'); //Declarando chave estrangeira e referenciando
   });
 };
 
 exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
 };

 /**Criando a table no terminal digite:
 * knex migrate:make nome_table
 * 
 * Executando a criação da table;
 *knex migrate:latest 
 **/
