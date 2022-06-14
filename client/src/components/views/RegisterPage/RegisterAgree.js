import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";

const RegisterAgree = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState(2);

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    const handleNext = () => {
        if (value === 2) {
            alert('동의 후 진행해주세요.');
        } else {
            navigate("/regist");
        }

    }

    return (
        <div className="RegisterAgreeBox" >
            <div className="RadioContainer">
                <h2>회원약관</h2>
                <textarea>
                    sdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsasdaffsdfsdafsasdfsa
                </textarea><br />
                {/* <div>
                    <input type="radio" checked />
                    <label>동의</label>
                </div>
                <div>
                    <input type="radio" />
                    <label>동의안함</label>
                </div> */}
                <Radio.Group onChange={onChange} value={value} className="RadioBox">
                    <Radio value={1}>동의</Radio>
                    <Radio value={2}>동의안함</Radio>
                </Radio.Group>
                <button className="HomeBtn">홈</button>
                <button className="NextBtn" onClick={handleNext}>다음</button>
            </div>
        </div>
    )
}

export default RegisterAgree;