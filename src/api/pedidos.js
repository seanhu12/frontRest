import {API_HOST} from "../utils/constants";
import axios from "axios";


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
export async function addProductApi(carro,mesaid,boleta_id) {


  
    axios.post(`${API_HOST}/pedidos/`, {
     table_id: mesaid,
     product_id: carro.id,
     boleta_id: boleta_id,
     estado: carro.status,
     cant: carro.cant,

     })
     .then(function (response) {
       
     })
     .catch(function (error) {
      
     }); 

 }


