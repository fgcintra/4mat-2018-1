var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true
      },
      marca: {
         type: String
      },
      cod_barras: {
         type: String
      },
      preco: {
         type: Number,
         required: true
      },
      quantidade: {
         type: Number,
         required: true
      },
      data_validade: {
         type: Date
      }
   });

   return mongoose.model('Produto', schema, 'produtos');

}