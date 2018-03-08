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

   controller.listar = function(req, res) {
      res.json(contatos);
      res.end();
   }

   return controller;

}