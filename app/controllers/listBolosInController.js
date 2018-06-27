
module.exports.listaBolos = (app, req, res) => {
    const connection = app.config.BDconnection();
    const bolosInModel = new app.app.models.bolosDAO(connection);
    bolosInModel.getBolos((error, result) => {
        res.render('listBolo/listBolo', {listBolos: result});
    });
};


module.exports.bolo = (app, req, res) => {
    const connection = app.config.BDconnection();
    const bolosInModel = new app.app.models.bolosDAO(connection);
    let id_bolos;
    if(req.query.id_bolos){
        id_bolos = req.query;
    }else{
        res.redirect('/lista_de_bolos');
        return;
    }

    bolosInModel.getBolo((error, result) => {
        res.render('listBolo/bolo', {bolos: result});
    });
};

module.exports.buscaBolo = (app, req, res) =>{
    const pesquisa = req.body.pesquisa;
    const connection = app.config.BDconnection();
    const bolosInModel = new app.app.models.bolosDAO(connection);
    bolosInModel.buscaBolo(pesquisa, (error, result) => {
      console.log(result)
      console.log(error)
        res.render('listBolo/listBolo', {listBolos: result});
    });
}

module.exports.excluirBolo = (app, req, res) =>{
    const connection = app.config.BDconnection();
    const bolosInModel = new app.app.models.bolosDAO(connection);
    let id_bolos;
    if(req.query.id_bolos){

        id_bolos = req.query;
    }else{
        res.redirect('/lista_de_bolos');
        return;
    }

    bolosInModel.excluirBolo(id_bolos, (error, result) =>{
        res.redirect('/lista_de_bolos');
    })
}
