const crypto = require('crypto');
const connection = require('../database/connection'); //Agora é possivel fazer as operações com o banco de dados

module.exports = {
  async index(request, response)  {
    const ongs = await connection('ongs').select('*'); //Listar todos os campos da tabela ongs

    return response.json(ongs);
    },

/**
 * Tabela onde quero inserir os dados "connection('ongs').insert". Como o insert pode demorar um pouco,
 *  o retorno deve esperar a finalização, definindo a função da route como assincrona "async" e antes do insert coloco "await"
 * Ai quando o node chegar no insert, ele irá aguardar a finalização e então continuar para retorno
*/
async create(request,response){
const { name, email, whatsapp, city, uf } = request.body;

const id = crypto.randomBytes(4).toString('HEX'); // Gerando o ID

  await connection('ongs').insert({   
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  })

  return response.json({ id });//Retorno para o Cliente, o que vou devolver. Nesse caso apenas o id, pois quando a ONG se cadastrar, ela precisa saber seu ID que foi gerado no banco
}
};