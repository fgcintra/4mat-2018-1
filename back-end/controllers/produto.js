var Produto = require('../models/produto')(/* construtor */);

module.exports = function() {

   var controller = {};

   controller.listar = function(req, res) {
      Produto.find().exec().then(
         // Callback se tudo der certo
         function(produtos) {
            res.json(produtos).end();
         },
         // Callback para o caso de erro
         function(erro) {
            console.error(erro);
            // HTTP 500: Internal server error
            res.status(500).end();
         }
      )
   }

   return controller;

}