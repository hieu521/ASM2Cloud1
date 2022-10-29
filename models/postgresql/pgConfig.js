const Pool = require('pg').Pool;

const pg_conn = new Pool(
    {
        user: 'qiolrneyqhjvrc',
        host: 'ec2-52-72-56-59.compute-1.amazonaws.com',
        database: 'dc8io853ukduvb',
        password: '523a98228a239a40ee8c82f6caa7fe9e728322d56f5f3e3684073bf66647f937',
        port: 5432,
        ssl: {
            rejectUnauthorized: false,
        },
    }
);

// test database
// pg_conn.query(`SELECT * FROM shops`, (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     }
//     else {
//         console.log(err.message)
//     }
//     pg_conn.end;
// })

module.exports = pg_conn;