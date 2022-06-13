import axios from 'axios';

export const loginUser = (dataToSubmit) => {
    const request = axios.post("/api/users/login", dataToSubmit)
                        .then(response => response.data)
}