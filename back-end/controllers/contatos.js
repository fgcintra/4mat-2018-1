var contatos = [
   {
      _id: 1,
      nome: 'Fulano da Silva',
      email: 'fulano@silva.com.br'
   },
   {
      _id: 2,
      nome: 'Siclana de Souza',
      email: 'siclana@souza.net'
   },
   {
      _id: 3,
      nome: 'Beltrano Ferreira',
      email: 'beltrano@ferreira.com'
   },
   {
      _id: 4,
      nome: 'José das Couves',
      email: 'jose@horta.org.br',
   },
   {
      _id: 5,
      nome: 'Maria da Bacia',
      email: 'maria@metalurgica.com.br'
   }

];

module.exports = function() {

   var controller = {};

   // Lista todos os contatos cadastrados
   controller.listar = function(req, res) {
      res.json(contatos);
      res.end();
   }

   // Obtém um contato a partir do seu id
   controller.obterUm = function(req, res) {
      // Obtém o id a partir do parâmetro da requisição
      var contatoId = req.params.id;

      // Filtra o vetor 'contatos' no vetor 'filtrado', deixando apenas
      // o contato cujo id coincide com contatoId
      var filtrado = contatos.filter(function(c) {
         return c._id == contatoId;
      });

      // O vetor 'filtrado' terá ou 1 elemento (caso tenha sido encontrado) ou
      // nenhum elemento (não encontrado)
      if(filtrado.length == 1) {
         // Retornamos o primeiro (e único) elemento do vetor
         res.json(filtrado[0]); 
      }
      else {
         res.status(404).send('CONTATO NÃO ENCONTRADO');
      }

      res.end();

   }

   controller.novo = function(req, res) {
      var c = req.body;

      console.log(req);

      // Retornamos erro caso não tenha passado o _id
      if(! c._id) {
         // HTTP 400: Bad request
         res.status(400).end();
      }

      var contato = {};

      contato._id = c._id;
      contato.nome = c.nome;
      contato.email = c.email;

      contatos.push(contato);

      // HTTP 201: Criado
      res.status(201).end();

   }

   return controller;

}