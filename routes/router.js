const express = require('express');
const router = express.Router();
const auth = require('../Controllers/userController');

router.get('/login', (req,res)=>{
    res.render('login')
})

router.get('/register', (req,res)=>{
    res.render('register')
})
router.post('/register/createuser', auth.create);
router.get('/users', auth.findAll);
router.get('/user/:id', auth.findOne);
router.put('/updateuser/:id', auth.update);
router.delete('/deleteuser/:id', auth.delete);
module.exports = router;