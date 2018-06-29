//listBoloInController.js --> Neste arquivo contem todos os controles da lista de bolos responsaveis pela inclusão, exclusão e busca de itens

module.exports.listaBolos = (app, req, res) => {//modulo que mostrará a lista de itens
    const connection = app.config.BDconnection();//conexao com o banco
    const bolosInModel = new app.app.models.bolosDAO(connection);//entra no "bolosDAO.js" para buscar os metodos com a connection
    bolosInModel.getBolos((error, result) => {//função com o metodo "getBolos" para buscar todos os itens
        res.render('listBolo/listBolo', {listBolos: result});//renderizada o resultado com todos os itens caso não houver erros
    });
};

module.exports.buscaBolo = (app, req, res) =>{//modulo que realizará a busca de itens
    const pesquisa = req.body.pesquisa;//constante que contem a string digitada pelo usuário para fazer a busca
    const connection = app.config.BDconnection();//conexao com o banco
    const bolosInModel = new app.app.models.bolosDAO(connection);//entra no "bolosDAO.js" para buscar os metodos com a connection
    bolosInModel.buscaBolo(pesquisa, (error, result) => {//função com  o metodo "buscaBolo" passando o parametro "pesquisa" que contem a string da pesquisa feita pelo usuário
        res.render('listBolo/listBolo', {listBolos: result});//renderizada a lista de itens com o(s) item(s) encontrado(s)
    });
};

module.exports.excluirBolo = (app, req, res) =>{//modulo que executa a exclusão de itens
    const connection = app.config.BDconnection();//conexao com o banco
    const bolosInModel = new app.app.models.bolosDAO(connection);//entra no "bolosDAO.js" para buscar os metodos com a connection
    let id_bolos;//variavel guardando o numero correspondente ao id do item
    if(req.query.id_bolos){//verifica se existe
        id_bolos = req.query;//busca e guarda na variavel
    }else{//caso não houver
        res.redirect('/lista_de_bolos');//redireciona para para a lista de itens
        return;
    }
    bolosInModel.excluirBolo(id_bolos, (error, result) =>{//função com o metodo "excluirBolo" passando o parametro "id_bolos" que foi selecionada pelo usuário
        res.redirect('/lista_de_bolos');//redireciona para a lista de itens
    })
};
