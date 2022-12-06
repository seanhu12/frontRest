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