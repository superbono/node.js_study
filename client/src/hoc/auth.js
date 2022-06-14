import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { auth } from '../../../client/src/_actions/user_action';

const authHoc = (SpecificComponent, option, adminRoute = null) => {

    // option -> 권한
    // option === null -> 아무나 출입이 가능한 페이지
    // option === true -> 로그인한 유저만 출입 가능
    // option === false -> 로그인한 유저는 출입 불가능


    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth())
                .then(response => console.log(response));
        }, [])

        return (
            <SpecificComponent />
        )

    }

    return AuthenticationCheck;
}

export default authHoc;