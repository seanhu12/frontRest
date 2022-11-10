import {API_HOST} from "../utils/constants";


export async function getProductApi(){
    try {
       const url = `${API_HOST}products`;    
        const response = await fetch(url);
        const result = await response.json();
        return result;   
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(){
    try {
        
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}