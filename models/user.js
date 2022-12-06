module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("usuarios", {
        username: {
          type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
          },
        password: {
            type: Sequelize.STRING
          },
        urlImg: {
            type: Sequelize.STRING
          },
        is_online: {
            type: Sequelize.BOOLEAN
          }
    })
    return User;
}