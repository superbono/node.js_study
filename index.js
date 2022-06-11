const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const port = 4000

const { User } = require("./models/User");

// application/x-www-form-urlcoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// application/json
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://choi:1234aa@testpjt.lqy406d.mongodb.net/?retryWrites=true&w=majority', {
     useNewUrlParser: true, 
     useUnifiedTopology: true, 
}).then(() => console.log('MongoDB Connected...')).catch(
    err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!fffffss')
})

app.post('/register',(req, res) => {

    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 데이터베이스에 넣어준다.
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) {
            return res.json({ success: false, err});
        }

        return res.status(200).json({
            success: true
        })
    });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})