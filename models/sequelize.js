const dbConfig = require("../database/db");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
   host: dbConfig.host,
   dialect: dbConfig.dialect,
   operatorAliases: false,
   pool: {
       max: dbConfig.pool.max,
       min: dbConfig.pool.min,
       acquire: dbConfig.pool.acquire,
       idle: dbConfig.pool.idle
   }
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.js")(sequelize, Sequelize);
db.friends = require("./friends.js")(sequelize, Sequelize);
db.groups = require("./groups.js")(sequelize, Sequelize);
module.exports = db;