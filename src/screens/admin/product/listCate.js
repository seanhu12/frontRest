import React, {useState,useEffect} from 'react'
import {SafeAreaView } from 'react-native'
import {getCategoriesApi} from '../../../api/category';
import ElcatePrAgList from '../../../component/admin/category/ElcatePrAgList';





export default function listCate(props){

  const {navigation} = props;

  const [category,setCategory] = useState([]);

  // Ejecuta codigo
  useEffect(()=>{
    (async () => {
      await  loadCategory();    
      
    })()
  },[])

  // carga categorias
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