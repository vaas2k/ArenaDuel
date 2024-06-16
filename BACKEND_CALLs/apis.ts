import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})


const findMatch = async (data : any) => {
    let response ;
    try{
        response = await api.post('/startChat',data);
    }catch(error){
        return error;
    }
    return response;
}

export  {
    findMatch
}