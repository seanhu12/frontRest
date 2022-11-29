import React, {useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native'
import {getCategoriesApi} from '../../../api/category';
import ElimiList from '../../../component/admin/category/ElimiList';







export default function ElCate(props){

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
      console.log(response);

    
      setCategory([...response]);
      
      } catch (error) {
      console.error(error);
    }
    

  }
 
  
  return (
    <SafeAreaView>
      <ElimiList category ={category} />
    </SafeAreaView>
  );

}