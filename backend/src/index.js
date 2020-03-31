const express = require('express'); //Importei para a variavel express o modulo express
const routes = require('./routes');
//const cors = require('cors'); 

const app  = express();
//app.use(cors)
app.use(express.json());
app.use(routes);

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */
   /**
    * 
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */
  
app.listen(3333); // Aqui mandei a aplicação ouvir através dessa porta