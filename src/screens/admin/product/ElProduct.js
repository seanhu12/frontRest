import React, {useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native'
import {getProductApi} from "../../../api/products"
import {getCategoriesApi} from "../../../api/category"
import ElimiProd from '../../../component/admin/product/ElimiProd';







export default function ElProducto(){

  

    const [products,setProducts] = useState([]);
    const [category,setCategory] = useState([]);

    useEffect(()=>{
      (async () => {
         
        await  loadProduct();    
        await loadCategory();
        
      })()
    },[])
  
   
  
    const loadProduct = async () => {
  
      try {
        
        const response = await getProductApi();
        
        setProducts([...response]);
        
        } catch (error) {
        console.error(error);
      }
  
    }
    const loadCategory= async () => {

      try {
        
        const response = await getCategoriesApi();
        console.log(response);
  
      
        setCategory([...response]);
        
        } catch (error) {
        console.error(error);
      }
      
  
    }
  
  
  
  
    
      
 
  
  return (
    <SafeAreaView>
      <ElimiProd products={products} category= {category} />
    </SafeAreaView>
  );

}