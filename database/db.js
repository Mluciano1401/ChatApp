const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Oladerio!1234',
    database: 'chatapp',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}


module.exports = dbConfig;