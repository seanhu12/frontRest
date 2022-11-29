import React, {useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native'
import {getCategoriesApi} from '../../../api/category';
import ElcatePrAgList from '../../../component/admin/category/ElcatePrAgList';





export default function listCate(props){

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
      <ElcatePrAgList category ={category} />
    </SafeAreaView>
  );

}