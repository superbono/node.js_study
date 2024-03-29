import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    REGISTER_AGREE,
    AUTH_USER
} from './types'

export const loginUser = (dataToSubmit) => {
    const request = axios.post("/api/users/login", dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export const registerUser = (dataToSubmit) => {
    const request = axios.post("/api/users/register", dataToSubmit)
        .then(response => response.data);
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export const registerAgree = (dataToSubmit) => {
    const request = axios.post("/api/users/registAgree", dataToSubmit)
        .then(response => response.data);
    return {
        type: REGISTER_AGREE,
        payload: request
    }
}

export const auth = () => {
    const request = axios.get("/api/users/auth")
        .then(response => response.data);
    return {
        type: AUTH_USER,
        payload: request
    }
}