var Produto = require('../models/produto')(/* construtor */);

module.exports = function() {

   var controller = {};

   controller.listar = function(req, res) {
      Produto.find().populate('categoria').exec().then(
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

   controller.novo = function(req, res) {
      
      Produto.create(req.body).then(
         function (produto) {
            res.status(201).json(produto);
         },
         function (erro) {
            console.error(erro);
            res.status(500).json(erro);
         }
      );

   }

   controller.obterUm = function(req, res) {
      var idProduto = req.params.id;

      Produto.findById(idProduto).exec().then(
         function(produto) { 
            if(produto) { // Encontrou o produto
               res.json(produto).end(); // Retorna o produto
            }
            else { // Não encontrou o produto
               res.status(404).end();
            }
         },
         function(erro) { // Erro no servidor MongoDB
            console.error(erro);
            res.status(500).json(erro).end();
         }
      );

   }

   controller.alterar = function(req, res) {
      var idProduto = req.params.id;

      Produto.findByIdAndUpdate(idProduto, req.body).exec().then(
         function(produto) {
            if(! produto) { // Não encontrou o produto para atualizar
               res.status(404).end();
            }
            else {
               res.status(204).end();
            }
         },
         function(erro) { // Erro no servidor MongoDB
            console.error(erro);
            res.status(500).json(erro).end();
         }
      )
   }

   controller.excluir = function(req, res) {
      var idProduto = req.params.id;

      Produto.findByIdAndRemove(idProduto).exec().then(
         function(produto) {
            if(! produto) { // Não encontrou o produto para excluir
               res.status(404).end();
            }
            else {
               res.status(204).end();
            }
         },
         function(erro) { // Erro no servidor MongoDB
            console.error(erro);
            res.status(500).json(erro).end();
         }
      );
   }

   return controller;

}