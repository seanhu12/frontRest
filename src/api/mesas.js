import {API_HOST} from "../utils/constants";


//Obtiene las mesas
export async function getMesaApi(){
    try {
       const url = `${API_HOST}/tables`;    
       
        const response = await fetch(url);
        
        const result = await response.json();
        
        return result;   


    } catch (error) {
        throw error;
    }
}

