import React,{useState,useEffect} from 'react'
import { Text, View ,Button,TextInput, StyleSheet,SafeAreaView } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import CategoryList from "../../component/client/category/CategoryList"
import {getCategoriesApi} from "../../api/category"
 

export default function ClientCategory() {

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
    <CategoryList category ={category} />
    </SafeAreaView>
  )
}
