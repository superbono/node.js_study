import { useState } from "react";

const LoginPage = () => {
    
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(Email, Password);
    }

    const onResetValue = () => {
        setEmail("");
        setPassword("");
    }

    return (
        <div className="LoginPageBox">
            <form className="LoginForm" onSubmit={onSubmit}>
                <label className="EmailLabel">Email</label>
                <input 
                    className="EmailInput" 
                    type="email"
                    value={Email}
                    onChange={handleEmailChange}
                    placeholder="이메일을 입력하세요." 
                />
                <label className="PasswordLabel">Password</label>
                <input 
                    className="PasswordInput" 
                    type="password" 
                    value={Password}
                    onChange={handlePasswordChange}
                    placeholder="비밀번호를 입력하세요." 
                />
                <div className="BtnContainer">
                    <button className="LoginBtn">로그인</button>
                    <button className="ResetBtn" onClick={onResetValue}>취소</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;