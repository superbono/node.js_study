import { useState } from "react";
import { useDispatch } from "react-redux"
import { registerUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호를 확인해주세요.')
        }

        let body = {
            name: Name,
            email: Email,
            password: Password
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    alert('회원가입이 완료되었습니다.');
                    navigate("/login")
                } else {
                    alert('확인 후 다시 가입해주세요.');
                }
            })

    }
    const onResetValue = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    return (

        <div className="LoginPageBox">
            <form className="LoginForm" onSubmit={onSubmit}>
                <label className="EmailLabel">Name</label>
                <input
                    className="EmailInput"
                    type="text"
                    value={Name}
                    onChange={handleNameChange}
                    placeholder="이름을 입력하세요."
                />
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
                <label className="PasswordLabel">Confirm Password</label>
                <input
                    className="PasswordInput"
                    type="password"
                    value={ConfirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="비밀번호를 입력하세요."
                />
                <div className="BtnContainer">
                    <button className="LoginBtn">회원가입</button>
                    <button className="ResetBtn" onClick={onResetValue}>취소</button>
                </div>
            </form>
        </div>

    )
}

export default RegisterPage;