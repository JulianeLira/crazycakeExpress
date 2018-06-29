//home.js --> Neste arquivo contem a rota para o pagina inicial

module.exports = (app) => {//modulo de exportação de uma função acessando o diretório app como parametro
	app.get('/',(req,res) => {//metodo GET com uma rota para pegar e renderizar a view do home
		res.render('home/index')//renderiza a home
	})
}
