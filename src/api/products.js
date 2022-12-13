import {API_HOST} from "../utils/constants";
import axios from "axios";


//obtiene los productos
export async function getProductApi(){
    try {
       const url = `${API_HOST}/products`;    
        const response = await fetch(url);
        const result = await response.json();
        return result;   
    } catch (error) {
        throw error;
    }
}

//Agrega los productos
export async function addProductApi(name,categoryid,description,image,price,amount) {  
    const response = axios.post(`${API_HOST}/products/`, {
     name: name,
     category_id: categoryid,
     description: description,
     price:price,
     amount: amount,
     image:image
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });

 }

 //Actualiza productos
 export async function updateProductApi(name,description,id,category_id,price,amount) {


  const url = `${API_HOST}/products/${id}`;
   const response = await axios
   .patch(url, {
     name: name,
     description: description,
     category_id: category_id,
     price: price,
     amount: amount
   }, {
       headers: { 'Content-type': 'application/json; charset=UTF-8' }
   });

   return response 
}

//Elimina Productos
export async function DeleteProduct(id) {


  const url = `${API_HOST}/products/${id}`;
  const response =  await axios.delete(url).then(function (response) {
        
        
        alert("Eliminada con exito");
    }).catch(function (error) {
        console.log(error);
        alert('Error Tiene pedidos asociados') 
    });
                    
  return response; 
}


