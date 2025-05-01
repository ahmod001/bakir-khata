import axios from "axios";


export interface User {
    email: string,
    password: string
}

export const login = async (user: User) => {
    const res = await axios.post('/user/login', user);
    return res.data;
}

