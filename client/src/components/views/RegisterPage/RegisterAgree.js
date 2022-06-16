import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { Radio } from "antd";
import Auth from "../../../hoc/auth";
import axios from 'axios';

const RegisterAgree = () => {

    const navigate = useNavigate();
    const [Cosmt, setCosmt] = useState(2);
    const [Fare, setFare] = useState(2);
    const dispatch = useDispatch();

    const onCosmtChange = (e) => {
        console.log("radio checked", e.target.value);
        setCosmt(e.target.value);
    };
    const handleNext = () => {
        if (Cosmt === 2) {
            alert('약관동의 후 진행해주세요.');
        } else if (Fare === 2) {
            alert('사용요금동의 후 진행해주세요.');
        } else {
            navigate("/regist");
            // axios.post('/api/users/registAgree',body)
        }
    }

    return (
        <div className="RegisterAgreeBox" >
            <div className="RadioContainer">
                <h3>약관동의</h3>
                <textarea>
                    sdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsa
                </textarea><br />
                <Radio.Group onChange={onCosmtChange} value={Cosmt} className="RadioBox" style={{ marginBottom: 5 }}>
                    <Radio value={1}>동의</Radio>
                    <Radio value={2}>동의안함</Radio>
                </Radio.Group>
                <h3>사용요금동의</h3>
                <textarea>
                    sdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsa
                </textarea><br />
                <Radio.Group onChange={setFare} value={Fare} className="RadioBox" style={{ marginBottom: 20 }}>
                    <Radio value={1}>동의</Radio>
                    <Radio value={2}>동의안함</Radio>
                </Radio.Group>
                <button className="HomeBtn">홈</button>
                <button className="NextBtn" onClick={handleNext}>다음</button>
            </div>
        </div>
    )
}

export default Auth(RegisterAgree, false);