import React from 'react'

const RegisterAgree = () => {
    return (
        <div className="RegisterAgreeBox" >
            <h2>회원약관</h2>
            <textarea>
                asdfsafsasdfsafsasdfsafsasdfsafsasdfsafsasdfsafssasdfsafsasdfsafs
                asdfsafsasdfsafsasdfsafsasdfsafsasdfsafsasdfsafssasdfsafsasdfsafs
                asdfsafsasdfsafsasdfsafsasdfsafsasdfsafsasdfsafssasdfsafsasdfsafs
                asdfsafsasdfsafsasdfsafsasdfsafsasdfsafsasdfsafssasdfsafsasdfsafs
                asdfsafsasdfsafsasdfsafsasdfsafsasdfsafsasdfsafssasdfsafsasdfsafs
            </textarea><br />
            <div className="RadioContainer">
                <div>
                    <input type="radio" checked />
                    <label>동의</label>
                </div>
                <div>
                    <input type="radio" />
                    <label>동의안함</label>
                </div>
            </div>
            <button className="HomeBtn">홈</button>
            <button className="NextBtn">다음</button>
        </div>
    )
}

export default RegisterAgree;