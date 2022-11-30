import React, {useState,useEffect,useContext} from 'react'
import {SafeAreaView } from 'react-native'
import { getProductApi } from '../../api/products';
import ProductList from '../../component/client/Product/ProductList';






export default function ClientScreen(props){

  const {navigation} = props;

  const [products,setProducts] = useState([]);

 
  useEffect(()=>{
    (async () => {
      await  loadProduct();    
      
    })()
  },[])

  const loadProduct = async () => {

    try {
      
      const response = await getProductApi();
      console.log(response);
      

      


    
      setProducts([...response]);
      
      } catch (error) {
      console.error(error);
    }

  }

  
 
  
  return (
    <SafeAreaView>
       <ProductList products = {products}  />
    </SafeAreaView>
  );

}