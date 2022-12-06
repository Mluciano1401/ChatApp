const db = require("../models/sequelize");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   console.log(req.body)
   if (!req.body.username){
      res.status(400).send({
         message: "Content can not be empty!"
      })
      return;
   }
   const user = {
      username: req.body.username,
      email: req.body.eail,
      password: req.body.password,
      urlImg: req.body.urlImg,
      is_online: req.body.is_online ? req.body.is_online : true
   }
   User.create(user).then(data => {
      res.send(data);
   }).catch(err => {
      res.status(500).send({
         message: err.message || "Some error occurred while creating the user"
      })
   })
}

exports.findAll = (req, res) => {
   const username = req.query.username;
   var condition = username ? { username: { [Op.like]: `%${username}`}}:null;
   User.findAll({ where: condition}).then(data => {
      res.send(data);
   }).catch(err => {
      res.status(500).send({
         message: err.message || "Some error occurred while retrieving the users"
     })
   })
}

exports.findOne = (req, res) => {
   const id = req.params.id;
   User.findByPK(id).then(data => {
      if(data){
         res.send(data);
      }
      else{
         res.status(404).send({
            message: `Cannot find User with id=${id}.`
         });
      }
   }).catch(err => {
      res.status(500).send({
         message: "Error retrieving User with id=" + id
      })
   })
}

exports.update = (req, res) => {
   const id = req.params.id;
   User.update(req.body, {
      where: {id: id}
   }).then(num => {
      if(num == 1){
         res.send({
            message: "User was updated successfully!"
         })
      }
      else{
         res.send({
            message: "Cannot update User with id=${id}. Maybe User was not found or req.body is empty!"
         })
      }
   }).catch(err => {
      res.status(500).send({
         message: "Error updating User with id=" + id
      })
   })
}

exports.delete = (req, res) => {
   const id = req.params.id;
   User.destroy({
      where: {id: id}
   }).then(num => {
      if(num == 1){
         res.send({
            message: "User was deleted successfully!"
         })
      }
      else{
         res.send({
            message: "Cannot delete User with id=${id}. Maybe User was not found"
         })
      }
   }).catch(err => {
      res.status(500).send({
         message: "Error, Could not delete User with id=" + id
      })
   })
}