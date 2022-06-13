import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate();
    // /api/hello으로만 요청을 보냈을 경우, client포트가 3000이므로 에러 발생
    // http://localhost:4000/api/hello으로 요청을 보냈을 경우, 
    // CORS(cross origin resource sharing)에러 발생
    // 해결하는 방법은 여러가지이지만, proxy를 사용하여 해결한다.
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response) })
    }, []);

    const handleLogout = () => {
        axios.get('/api/users/logout')
            .then(response => {
                console.log(response.data);
                document.cookie = 'user_auth' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                alert('로그아웃 되었습니다.');
                navigate('/login');
            })
    }

    return (
        <div className="LandingPageBox">
            <h1>LandingPage</h1>
            <div className="LogoutBtnContainer">
                <button onClick={handleLogout} className="LogoutBtn">로그아웃</button>
            </div>
        </div>
    )
}

export default LandingPage;