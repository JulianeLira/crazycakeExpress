//conexao com o banco de dados com MYSQL
//tendo um componente como configuracao para ter acesso ao banco

const mysql = require('mysql');//chama o myql

const MysqlBDconnection = () => {//objeto contendo os informacoes de acesso do banco
    return mysql.createConnection({//criação da conexao
        host: '',//hospedagem
        user: '',//usuário
        password:'',//senha
        database: 'crazycakebd'//base de dados
    });
    // tabela: id_bolos, nome_bolos, ingredientes_bolos, valor_bolos
}

module.exports = () =>{//modulo de exportação
    console.log("tabela conectada");
    return MysqlBDconnection;//retorna o objeto
}
