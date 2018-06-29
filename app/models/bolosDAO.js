//boloDAO.js -->  Neste arquivo estão todas as interações com o banco de dados

class bolosDAO {
    constructor(connection){//constructor buscando a connection do BDconnection.js
        this._connection = connection;
    }

    getBolos(callback){ //busca dos itens da ta tabela
        this._connection.query('select * from bolos order by id_bolos', callback);// select com callback dos itens
    }

    salvarBolo(bolo, callback){//salva os itens para a tabela
       this._connection.query('insert into bolos set ?', bolo, callback);//insert onde pega os dados guardados
    }                                                                    //no parametro "bolo" que foram digitadas
                                                                         //pelo usuário

    buscaBolo(pesquisa, callback){//faz a pesquisa especifica de um item
        this._connection.query("select * from bolos where nome_bolos like '%" + pesquisa + "%'", callback);//select que a partir do "nome_bolos"
    }                                                                                                      //e do parametro "pesquisa" onde está guardada
                                                                                                           //a string da pesquisa digitada pelo usuário
    excluirBolo(id_bolos, callback){//exclusão do item
        this._connection.query('delete from bolos where id_bolos = ' + id_bolos.id_bolos, callback);//delete apartir do "id_bolos" buscada
    }                                                                                               //pelo parametro "id_bolos" onde está armazenada
                                                                                                    //o numero de ID do item

}

module.exports = () => {
    return bolosDAO;
}
