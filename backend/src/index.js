const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

/*

Métodos HTTP:

GET -> Buscar/listar informação no backend
POST -> Criar uma informação no backend
PUT -> Alterar informação no backend
DELETE -> Deleta informação no backend

*/

/* 

Tipos de parâmetros:

Query: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação)
Route: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos

*/

/*

Tipos de bancos:

SQL (relacionais): MySQL, SQLite, Oracle
NoSQL (não-relacionais): MongoDB

--///--

Driver: SELECT * FROM users;
Query Builder: table('users').select('*').where()

*/
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);