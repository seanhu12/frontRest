import React, {useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native'
import {getCategoriesApi} from '../../../api/category';
import CategoryList from "../../../component/admin/category/CategoryList"







export default function ClientScreen(props){

  const {navigation} = props;

  const [category,setCategory] = useState([]);




  //Ejecuta codigo
  useEffect(()=>{
    (async () => {
      await  loadCategory();    
      
    })()
  },[])


  //Carga Categoria
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
      <CategoryList category ={category} />
    </SafeAreaView>
  );

}