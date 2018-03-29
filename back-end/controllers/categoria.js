var Categoria = require('../models/categoria')();

module.exports = function() {

   controller = {};

   controller.listar = function(req, res) {
      Categoria.find().exec().then(
         function(categorias) {
            res.json(categorias).end();
         },
         function(erro) {
            console.error(erro);
            res.status(500).json(erro).end();
         }
      );
   }

   controller.novo = function(req, res) {
      var novo = new Categoria(req.body);

      novo.save(function(erro) {
         if(erro) {
            res.status(500).json(erro).end();
         }
         else {
            res.status(201).end();
         }
      });
   }

   return controller;

};