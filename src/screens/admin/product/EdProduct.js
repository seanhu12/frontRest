import React, {useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native'
import {getProductApi} from '../../../api/products';
import {getCategoriesApi} from "../../../api/category"
import EditProdList from '../../../component/admin/product/EditProdList';


export default function EdProduct(props){

  const {navigation} = props;

  const [category,setCategory] = useState([]);
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    (async () => {
      await  loadCategory();    
      await  loadProduct();    
      
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
      
      } catch (error) {
      console.error(error);
    }
    

  }
 
  
  return (
    <SafeAreaView>
      <EditProdList category ={category} product = {products} />
    </SafeAreaView>
  );

}