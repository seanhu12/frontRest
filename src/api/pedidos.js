import {API_HOST} from "../utils/constants";


export async function getPedidosApi(){
    try {
       const url = `${API_HOST}pedidos`;    
        const response = await fetch(url);
        const result = await response.json();
        return result;   
    } catch (error) {
        throw error;
    }
}


