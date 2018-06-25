    

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
    let id_bolo;
    if(req.query.id_bolos){
        id_bolo = req.query;
    }else{
        res.redirect('/lista_de_bolos');
        return;
    }

    bolosInModel.getBolo((error, result) => {
        res.render('listBolo/bolo', {bolos: result});
    });
};

module.exports.buscaBolo = (app, req, res) =>{
    const connection = app.config.BDconnection();
    const bolosInModel = new app.app.models.bolosDAO(connection);
    const pesquisaBolo = req.body.pesquisaBolo;

    bolosInModel.buscaBolo(pesquisaBolo, (error, result) => {
        res.render('listBolo/listBolo', {listBolos: result});
    })
}

module.exports.excluirBolo = (app, req, res) =>{
    const connection = app.config.BDconnection();
    const bolosInModel = new app.app.models.bolosDAO(connection);
    let id_bolo;
    if(req.query.id_bolo){
        id_bolo = req.query;
    }else{
        res.redirect('/lista_de_bolos');
        return;
    }

    bolosInModel.excluirBolo(id_bolo, (error, result) =>{
        res.redirect('/lista_de_bolos');
    })
}