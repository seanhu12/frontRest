import {API_HOST} from "../utils/constants"
import axios from "axios";


//Obtiene las categorias 
export async function getCategoriesApi(){
    try {
        const url =`${API_HOST}/categories/`;
        const response = await fetch(url)
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}


//Agrega una categoria 
export async function addCategoryApi(name,description) {

    const response = axios.post(`${API_HOST}/categories/`, {
      name: name,
      description: description
      })
      .then(function (response) {
        
        console.log(response);
        alert("Categoria  Agregada con exito");
      })
      .catch(function (error) {
        console.log(error);
        alert('Existe una categoria con ese nombre') 
      });

      return response

      

  }

  //Actualiza una categorias 
  export async function updateCategoryApi(name,description,id) {
        const url = `${API_HOST}/categories/${id}`;
         const response = await axios
         .patch(url, {
           id:id,
           name: name,
           description: description
         }, {
             headers: { 'Content-type': 'application/json; charset=UTF-8' }
         }).then(function (response) {
        
          console.log(response);
          alert("Categoria Actualizada con exito");
        })
        .catch(function (error) {
          console.log(error);
          alert('Existe una categoria con ese nombre') 
        });;


         return response 
 }



//Elimina las categorias 
 export async function DeleteCategoryApi(id) {


   const url = `${API_HOST}/categories/${id}`;
   const response =  await axios.delete(url).then(function (response) {
        
        
        alert("Eliminada con exito");
  }).catch(function (error) {
        console.log(error);
        alert('Tiene productos asociados') 
  });

                     
       return response; 
}
  