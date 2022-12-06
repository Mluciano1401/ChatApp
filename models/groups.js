module.exports = (sequelize, Sequelize) =>{
    const Groups = sequelize.define("groups", {
        name: {
            type: Sequelize.STRING
          },
        creator: {
            type:  Sequelize.STRING
        },
        Users: {
            type: Sequelize.STRING,
            get: function(){
                return JSON.parse(this.getDataValue('Users'));
            },
            set: function(){
                return this.setDataValue('Users', JSON.stringify(val));
            }
          }
    })
    return Groups;
}