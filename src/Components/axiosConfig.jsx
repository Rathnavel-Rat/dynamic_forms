import axios from "axios";


export default function Axios(){ 
    return axios.create({ 

    baseURL: " http://127.0.0.1:8000/",


});
}


