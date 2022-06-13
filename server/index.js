const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { auth } = require('./middleware/auth');

const { User } = require("./models/User");

// application/x-www-form-urlcoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// application/json
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
     useNewUrlParser: true, 
     useUnifiedTopology: true, 
}).then(() => console.log('MongoDB Connected...')).catch(
    err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!fffffss11')
})

app.get('/api/hello', (req, res) => {
  res.send('hello');
})

app.post('/api/users/register',(req, res) => {

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

app.post('/api/users/login', (req, res) => {
        // 로그인 할 때 필요한 로직 
        // 1. 데이터베이스에 요청한 아이디(email) 찾기
         User.findOne({ email: req.body.email }, (err, user) => {
            if(!user) {
                return res.json({
                    loginSuccess: false,
                    message: "실패! 해당하는 이메일이 없습니다."
                })
            } 

        // 2. 데이터베이스에 요청한 아이디(email)이 있다면 비밀번호가 같은지 확인
        user.comparedPassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({
                loginSuccess: false,
                message: "비밀번호가 일치하지 않습니다."
            })

            // 3. 비밀번호가 같다면 Token을 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                
                // 토큰을 저장한다. ex) localStorage, cookie, session 등...
                // 쿠키에 저장시 cookie-parser 라이브러리 설치 
                res.cookie("user_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true,
                        message: "로그인 되었습니다.",
                        userId: user._id
                    })

            })

        })


    })

})


// 권한을 체크하려면 미들웨어를 만들어야 권한에 따라 페이지를 보여줄 수 있다.
// 예를들어, 회원가입을 하지 않은 유저라면 권한체크 시에 notUser와 같은 value를 넣어서,
// 해당 페이지를 이용할 수 없도록 중간에서 해주어야 한다.
app.get('/api/users/auth', auth ,(req, res) => {
    // 미들웨어에서 에러없이 이 페이지 왔다는 건 Authentication이 true라는 것이다.
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    });
})

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        {_id: req.user._id},
        {token: ""},
        (err, user) => {
            if(err) return res.json({
                success: false,
                err: true,
            })
            return res.status(200).send({
                success: true,
            })
        }
    )
})

const port = 4000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})