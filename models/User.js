const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 150
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

userSchema.pre('save', function(next){

    let user = this;
    if(user.isModified('password')) {
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }

});


userSchema.methods.comparedPassword = function(plainPassword, cb) {

    let user = this;
    // plainPassword: 클라이언트 화면에서 입력한 패스워드
    // cb: callback 함수
    bcrypt.compare(plainPassword, user.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch)
    });
}

userSchema.methods.generateToken = function(cb) {
    let user = this;
    // jsonwebtoken 라이브러리 설치
    let token = jwt.sign(user._id.toHexString(), 'secretToken');
    user.token = token
    // console.log("토큰" + user.token);
    user.save(function(err, user){
        if(err) return cb(err);
        cb(null, user);
    })
}

userSchema.statics.findByToken = function(token, cb) {
    let user = this;
    
    // 토큰을 복호화한다.
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾는다.
        // 클라이언트에서 가져온 token과 db에 있는 token이 일치하는지 확인한다.

        user.findOne({ "_id": decoded, "token": token }, function(err,user) {
            if(err) return cb(err);
            cb(null, user);
        });

    });

}

const User = mongoose.model('User', userSchema);

module.exports = {User}