//listBolos.js --> Neste arquivo contém todas as rotas para os modulos no controller

module.exports = (app) =>{//modulo de exportação de uma função acessando o diretório app como parametro

    app.get('/lista_de_bolos', (req, res) => {//metodo GET com uma rota para pegar os itens do banco de dados
        app.app.controllers.listBolosInController.listaBolos(app, req, res);//acessa o caminho até o modulo "listaBolos"
    });

    app.post('/busca_bolo', (req, res) => {//metodo POST para enviar ao controllers os valores de "pesquisa" contidas no Controller
        app.app.controllers.listBolosInController.buscaBolo(app, req, res);//acessa o caminho até o modulo "buscaBolo"
    });

    app.get('/excluir_bolo',(req, res) => {//metodo GET com uma rota para exluir itens
        app.app.controllers.listBolosInController.excluirBolo(app, req, res);//acessa o caminho até o modulo "excluirBolo"
    });

};
