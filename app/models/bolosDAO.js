class bolosDAO {
    constructor(connection){
        this._connection = connection;
    }

    getBolos(callback){
        this._connection.query('select * from bolos order by id_bolos', callback);
    }

    getBolo(id_bolo, callback){
        this._connection.query('select * from bolos where id_bolo = ' + id_bolos.id_bolos, callback);
    }

    buscaBolo(pesquisaBolo, callback){
        this._connection.query("select * from bolos where titulo like '%" + pesquisaBolo + "%' order by id_bolos", callback);
    }

    excluirBolo(id_bolo, callback){
        this._connection,query('delete from bolos where id_bolos = ' + id_bolos.id_bolos, callback);
    }
    
}

module.exports = () => {
    return bolosDAO;
}