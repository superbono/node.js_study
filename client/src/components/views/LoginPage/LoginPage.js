import { useRef, useState } from "react";
import { useDispatch } from "react-redux"
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";


const LoginPage = () => {

    const InputEmailRef = useRef();
    const InputPwRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

        if (Email === '') {
            alert('이메일을 입력해주세요.');
            return InputEmailRef.current.focus();
        } else if (Password === '') {
            alert('비밀번호를 입력해주세요.');
            return InputPwRef.current.focus();
        }

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    alert('로그인 되었습니다.');
                    navigate('/');
                } else {
                    alert('회원정보를 확인 후 이용해주세요.');
                    setEmail("");
                    setPassword("");
                    // navigate('/regist');
                }
            })
    }

    const onMoveRegist = () => {
        setEmail("");
        setPassword("");
        navigate("/regist-agree")
    }

    return (
        <div className="LoginPageBox">
            <form className="LoginForm" onSubmit={onSubmit}>
                <label className="EmailLabel">이메일</label>
                <input
                    className="EmailInput"
                    type="email"
                    value={Email}
                    onChange={handleEmailChange}
                    placeholder="이메일을 입력하세요."
                    ref={InputEmailRef}
                />
                <label className="PasswordLabel">비밀번호</label>
                <input
                    className="PasswordInput"
                    type="password"
                    value={Password}
                    onChange={handlePasswordChange}
                    placeholder="비밀번호를 입력하세요."
                    ref={InputPwRef}
                />
                <div className="BtnContainer">
                    <button className="LoginBtn">로그인</button>
                    <button className="ResetBtn" onClick={onMoveRegist}>회원가입</button>
                </div>
            </form>
        </div>
    )
}

export default Auth(LoginPage, false);