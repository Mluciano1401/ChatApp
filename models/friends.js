module.exports = (sequelize, Sequelize) =>{
    const Contacts = sequelize.define("contactos", {
        User: {
            type: Sequelize.JSON
          },
        Friend: {
            type: Sequelize.JSON
          }
    })
    return Contacts;
}