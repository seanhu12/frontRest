import {API_HOST} from "../utils/constants";
import axios from "axios";





export async function getBoletaaApi(){
    try {
       const url = `${API_HOST}/boletas/`;    
        const response = await fetch(url);
        const result = await response.json();
        return result;   
    } catch (error) {
        throw error;
    }
}

export async function addBoletaApi(total,mesaid) {

    console.log(total);
    console.log(mesaid);


    axios.post(`${API_HOST}/boletas/`, {
     table_id: mesaid,
     total: total

     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     }); 
}
