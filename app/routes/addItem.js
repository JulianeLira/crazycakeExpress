//addItem.js --> Neste arquivo contem as rotas para o formulario e para o salvamento dos valores do formulário

module.exports = function(app){//modulo de exportação de uma função acessando o diretório app como parametro
	app.get('/form_add_item',(req,res) =>{//metodo GET com uma rota para pegar e renderizar a view do formulário
		res.render('addItem/formAddItem', {validacao: {}, bolo: {}});//renderiza a view com a validacao e o valores contidos no "bolo"
	});

	app.post('/salvarBolo', (req, res) => {//metodo POST para enviar ao banco os valores de "bolos" contidas no Controller
		app.app.controllers.addItemInController.salvarBoloForm(app, req, res);//acessa o caminho até o modulo "salvarBoloForm"
	});

}
