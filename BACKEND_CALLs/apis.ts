import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})


const queue_player = async (data : any) => {
    let response ;
    try{
        response = await api.post('/enqueue_player',data);
    }catch(error){
        return error;
    }
    return response;
}
const cancel_queue = async (data : any) => {
    let response : any;
    try{
        response = await api.post('/cancel_queue',data);
    }catch(error){
        return error;
    }
    return response;
}

export  {
    queue_player,
    cancel_queue
}