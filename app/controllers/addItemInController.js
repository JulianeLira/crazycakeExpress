//addItemController.js --> este arquivo contém o controle do formulário de inclusão de itens e tratamento de erro

module.exports.salvarBoloForm = (app, req, res) =>{//modulo salvarBolo, aqui estão os expressValidators para regras de negocio
  var bolo = req.body;//busca as informaçõesno     //no formulário, juntamente com um tratamento de erro caso o item não for
                      //corpo do arquivo           //salvo corretamente

  req.assert('nome_bolos','Nome do Item é OBRIGATÓRIO').notEmpty();//caso o usuário não digite o campo ele será alertado para preencher
  req.assert('ingredientes_bolos', 'O Item DEVE Conter Ingredientes. Insira pelo menos 20 caracteres ').len(20, 200);//caso o usuário digite poucos caracters ele será alertado para preencher mais
  req.assert('valor_bolos','O Valor do Item DEVE Conter Apenas Números' ).isNumeric();//caso o usuário não digite números ele será alertado para preencher
  const erros =  req.validationErrors();//busca o expressValidators de erros

  if (erros) {//if/else para tratamento de erros
		res.render("addItem/formAddItem", {validacao: erros, bolo: bolo});//caso houver erros a rota do formulário será renderizada novamente
		return;
	}


  const connection = app.config.BDconnection();//conexao com o banco
  const bolosInModel = new app.app.models.bolosDAO(connection);//entra no "bolosDAO.js" para buscar os metodos com a connection

  bolosInModel.salvarBolo(bolo, (error, result) =>{//função com o metodo "salvarBolo" passando o parametro "bolo" que contem os informações inseridas no formulário
    res.redirect('/lista_de_bolos');//manda o usuário para a lista de itens
  })

}
