const Pool = require('pg').Pool;

const pg_conn = new Pool(
    {
        user: 'nrwmsqhxfivpst',
        host: 'ec2-54-163-34-107.compute-1.amazonaws.com',
        database: 'dig8rncr5hug1',
        password: '52600808eae93efbc5bb250191bbed61581b7f321a9de0ffa7e42dd88299afd2',
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