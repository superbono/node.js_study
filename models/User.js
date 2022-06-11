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
    user.save(function(err, user){
        if(err) return cb(err);
        cb(null, user);
    })
}

const User = mongoose.model('User', userSchema);

module.exports = {User}