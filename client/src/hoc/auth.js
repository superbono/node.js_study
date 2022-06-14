import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { auth } from '../../../client/src/_actions/user_action';
import { useNavigate } from "react-router-dom";

const authHoc = (SpecificComponent, option, adminRoute = null) => {

    // option -> 권한
    // option === null -> 아무나 출입이 가능한 페이지
    // option === true -> 로그인한 유저만 출입 가능
    // option === false -> 로그인한 유저는 출입 불가능


    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth())
                .then(response => {
                    // console.log(response)

                    // 로그인 하지 않은 상태
                    if (response.payload.isAuth === false) {
                        if (option) {
                            navigate('/login');
                        }
                    } else {
                        // 로그인 한 상태
                        if (adminRoute && !response.payload.isAdmin) {
                            navigate('/')
                        } else {
                            if (!option) {
                                navigate('/')
                            }
                        }
                    }

                });
        }, [])

        return (
            <SpecificComponent />
        )

    }

    return AuthenticationCheck;
}

export default authHoc;