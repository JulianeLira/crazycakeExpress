module.exports = function(app){
	app.get('/form_add_item',(req,res) =>{
		res.render('addItem/formAddItem', {validacao: {}, bolo: {}});
	});
	app.post('/salvarBolo',(req, res) => {
		app.app.controllers.addItemInController.salvarBoloForm(app, req, res);
	});
}
