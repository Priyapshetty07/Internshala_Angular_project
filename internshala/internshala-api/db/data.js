var mysql = require('mysql2');
let mysqlConnect = function () {

    return mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'PriyaDiya@0713',
        database: 'INTERNSHALA',
        insecureAuth: true
    });

};
module.exports.localConnect = mysqlConnect;