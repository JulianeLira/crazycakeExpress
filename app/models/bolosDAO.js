class bolosDAO {
    constructor(connection){
        this._connection = connection;
    }

    getBolos(callback){
        this._connection.query('select * from bolos order by id_bolos', callback);
    }

    salvarBolo(bolo, callback){
      console.log(bolo)
       this._connection.query('insert into bolos set ?', bolo, callback);
    }

    buscaBolo(pesquisa, callback){
        this._connection.query("select * from bolos where nome_bolos like '%" + pesquisa + "%'", callback);
    }

    excluirBolo(id_bolos, callback){
        this._connection.query('delete from bolos where id_bolos = ' + id_bolos.id_bolos, callback);
    }

}

module.exports = () => {
    return bolosDAO;
}
