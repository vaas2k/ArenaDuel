import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})


const queue_player = async (data : any) => {
    let response : any ;
    try{
        response = await api.post('/enqueue_player',data);
    }catch(error){
        return error;
    }
    return response;
}
const cancel_matchmaking = async (data : any) => {
    let response : any;
    try{
        response = await api.post('/player_left',data);
    }catch(error){
        console.log(error);
        return error;
    }
    return response;
}

const submitCode = async (data : any) => {
    let response : any;
    response = await api.post('/runAllTestCases',data);
    return response;
}
const runCode = async (data : any) => {
    let response : any;
    response = await api.post('/runSampleTestCases',data);
    return response;
}
const ontimeoutwin = async (data : any) => {
    let response : any;
    response = await api.post('/ontimeoutwin',data);
    return response;
}
const onsubmissionwin = async (data : any) => {
    let response : any;
    response = await api.post('/onSubmissionwin',data);
    return response;
}
const ondraw = async (data : any) => {
    let response : any;
    response = await api.post('/onDraw',data);
    return response;
}
const marathonMatch = async (data : any) => {
    let response : any;
    response = await api.post('/marathonmatch',data);
    return response;
}

const marathonMatchOver = async (data : any) => {
    let response : any;
    response = await api.post('/marathonmatchover',data);
    return response;
}

const abandonMatch = async (data : any) => {
    let response : any;
    response = await api.post('/abandon',data);
    return response;
}

const getLeaderBoard = async () => {
    let response : any;
    response = await api.get('/getleaderboard');
    return response;
}

export  {
    queue_player,
    cancel_matchmaking,
    submitCode,
    runCode,
    ontimeoutwin,
    onsubmissionwin,
    ondraw,
    marathonMatch,
    marathonMatchOver,
    abandonMatch,
    getLeaderBoard
}