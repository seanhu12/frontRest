import React, {useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native'
import {getCategoriesApi} from '../../../api/category';
import CategoryList from "../../../component/admin/category/CategoryList"







export default function ClientScreen(props){

  const {navigation} = props;

  const [category,setCategory] = useState([]);




 
  useEffect(()=>{
    (async () => {
      await  loadCategory();    
      
    })()
  },[])

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