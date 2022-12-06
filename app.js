const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const { json } = require('express/lib/response');
const db = require('./models/sequelize')
io.on('connection', (socket)=>{
   /*  console.log("a user has connected");
    socket.on('disconnect', ()=>{
        console.log("a user has disconnected")
    }) */
    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express(json));
app.get('/', (req, res)=>{
    res.render('index', {user:undefined});
});
app.use('/auth/', require('./routes/router'));
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
server.listen(3000, ()=>{
    console.log("The Sever is successful run in http://localhost:3000");
}) 