import axios from "axios";



export const statistics = async () => {
    const res = await axios.get('/statistics');
    return res.data;
}

