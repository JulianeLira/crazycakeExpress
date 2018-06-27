//conexao com o banco de dados com MYSQL
//tendo um componente como configuracao para ter acesso ao banco

const mysql = require('mysql');

const MysqlBDconnection = () => {
    console.log('banco online');
    return mysql.createConnection({
        host: 'www.db4free.net',
        user: 'ptommaselli',
        password:'..pedro01',
        database: 'crazycakebd'
    });
}

module.exports = () =>{
    console.log("tabela conectada");
    return MysqlBDconnection;
}
