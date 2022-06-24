import { useRef, useState } from "react";
import { useDispatch } from "react-redux"
import { registerUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";

const RegisterPage = () => {

    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputPwRef = useRef();
    const inputConfirmPwRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    // const [clusCOSMTYN, setClusCOSMTYN] = useState("N");
    // const [useFareCosmtYN, setUseFareCosmtYN] = useState("N");

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

    const handleIdChk = () => {
        alert('중복체크');
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (Name === '') {
            alert('이름을 입력해주세요.');
            return inputNameRef.current.focus();
        } else if (Email === '') {
            alert('이메일을 입력해주세요.');
            return inputEmailRef.current.focus();
        } else if (Password === '') {
            alert('비밀번호를 입력해주세요.');
            return inputPwRef.current.focus();
        } else if (ConfirmPassword === '') {
            alert('비밀번호를 입력해주세요.');;
        } else if (Password !== ConfirmPassword) {
            alert('비밀번호를 확인해주세요.');
            return inputConfirmPwRef.current.focus();
        }

        return inputConfirmPwRef.current.focus()
        let body = {
            name: Name,
            email: Email,
            password: Password,
            clusCOSMTYN: "Y",
            useFareCosmtYN: "Y",
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    alert('회원가입이 완료되었습니다.');
                    navigate("/login")
                }
            })

    }
    const onMoveLogin = () => {
        // setName("");
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");
        // 리셋버튼 대신에 로그인페이지로 이동
        navigate("/login");
    }
    return (

        <div className="LoginPageBox">
            <form className="LoginForm" onSubmit={onSubmit}>
                <label className="NameLabel">이름</label>
                <input
                    className="NameInput"
                    type="text"
                    value={Name}
                    onChange={handleNameChange}
                    placeholder="이름을 입력하세요."
                    ref={inputNameRef}
                />
                <label className="EmailLabel">이메일</label>
                <div className="EmailBox">
                    <input
                        className="EmailInput"
                        type="email"
                        value={Email}
                        onChange={handleEmailChange}
                        placeholder="이메일을 입력하세요."
                        ref={inputEmailRef}
                    />
                    <button className="IdChkBtn" type="button" onClick={handleIdChk}>중복확인</button>
                </div>
                <label className="PasswordLabel">비밀번호</label>
                <input
                    className="PasswordInput"
                    type="password"
                    value={Password}
                    onChange={handlePasswordChange}
                    placeholder="비밀번호를 입력하세요."
                    ref={inputPwRef}
                />
                <label className="ConfirmPasswordLabel">비밀번호 확인</label>
                <input
                    className="ConfirmPasswordInput"
                    type="password"
                    value={ConfirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="비밀번호를 입력하세요."
                    ref={inputConfirmPwRef}
                />
                <div className="BtnContainer">
                    <button className="LoginBtn">회원가입</button>
                    <button className="ResetBtn" onClick={onMoveLogin}>로그인</button>
                </div>
            </form>
        </div>

    )
}

export default Auth(RegisterPage, false);