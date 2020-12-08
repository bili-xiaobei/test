const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/user');
var app = express();

app.use('/api/user', userRouter)

app.get('/login', (req, res) => {
    res.send('jkasdfhhasg');
})

app.use(bodyParser.urlencoded({
    extended: false
}))

app.listen(3000, () => {
    console.log('Vue_project Runing...')
})