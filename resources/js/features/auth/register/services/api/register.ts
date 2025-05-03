import axios from "axios";


export interface User {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    address?: string;
}

export const register = async (user: User) => {
    const res = await axios.post("/user/register", user)
    return res.data;
}


