module.exports.salvarBoloForm = (app, req, res) =>{
  var bolo = req.body;

  req.assert('nome_bolos','Nome do Item é OBRIGATÓRIO').notEmpty();
  req.assert('ingredientes_bolos', 'O Item DEVE Conter Ingredientes. Insira pelo menos 20 caracteres ').len(20, 200);
  req.assert('valor_bolos','O Valor do Item DEVE Conter Apenas Números' ).isNumeric();
  const erros =  req.validationErrors();

  if (erros) {
		res.render("addItem/formAddItem", {validacao: erros, bolo: bolo});
		return;
	}


  const connection = app.config.BDconnection();
  const bolosInModel = new app.app.models.bolosDAO(connection);

  bolosInModel.salvarBolo(bolo, (error, result) =>{
    res.redirect('/lista_de_bolos');
  })

}
