import { useEffect } from "react";
import axios from 'axios';

const LandingPage = () => {
    
    useEffect(()=>{
        // /api/hello으로만 요청을 보냈을 경우, client포트가 3000이므로 에러 발생
        // http://localhost:4000/api/hello으로 요청을 보냈을 경우, CORS에러 발생
        axios.get('http://localhost:4000/api/hello')
             .then(res => console.log(res.data));
    }, []);
    
    
    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage;