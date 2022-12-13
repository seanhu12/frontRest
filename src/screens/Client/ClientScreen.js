import React, {useState,useEffect,useContext} from 'react'
import {SafeAreaView } from 'react-native'
import { getProductApi } from '../../api/products';
import {getCategoriesApi} from "../../api/category"
import ProductList from '../../component/client/Product/ProductList';
import RestaurantContext from '../../RestaurantContext';






export default function ClientScreen(){
  const [products,setProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const {cat,setCat} = useContext(RestaurantContext)


  //ejecuta parte del codigo necesarios
  useEffect(()=>{
    (async () => {
      await  loadProduct();    
      await loadCategory();
      
    })()
  },[])

  //carga los productos de la base de datos
  const loadProduct = async () => {
    try {
      // espera una respuesta
      const response = await getProductApi();  
      setProducts([...response]);
      
    
      } catch (error) {
      console.error(error);
    }

  }
  // carga las categorias de la base de datos
  const loadCategory= async () => {
    try {      
      //espera una respuesta 
      const response = await getCategoriesApi();
      setCategory([...response]);
      setCat(response)
      
      } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <SafeAreaView>
       <ProductList products = {products} cat= {category} />
    </SafeAreaView>
  );

}