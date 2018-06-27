module.exports = (app) =>{

    app.get('/lista_de_bolos', (req, res) => {
        app.app.controllers.listBolosInController.listaBolos(app, req, res);
    });

    app.get('/bolo', (req, res) => {
        app.app.controllers.listBolosInController.bolo(app, req, res);
    })

    app.post('/busca_bolo', (req, res) => {
        app.app.controllers.listBolosInController.buscaBolo(app, req, res);
    });

    app.get('/excluir_bolo',(req, res) => {
        app.app.controllers.listBolosInController.excluirBolo(app, req, res);
    });

};
