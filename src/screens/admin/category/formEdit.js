import React,{useState, useEffect,useContext} from 'react'
import {Text,TextInput,SafeAreaView,StyleSheet, Image,Platform,View,Button } from "react-native"
import {useNavigation} from "@react-navigation/native"
import RestaurantContext from '../../../RestaurantContext';

import {updateCategoryApi} from "../../../api/category"

export default function formEdit() {
  const [text2, setTex2]= useState();
  const [text,setText] = useState();
  const navigation = useNavigation();

  const { category,setCategory} = useContext(RestaurantContext)

 

 


  const  editar  = async () =>{


    

    try {

        if(!text && text2){
             const response = await updateCategoryApi(category.name,text2,category.id);
             alert("Categoria  actualizada con exito");
            
             
        }else if(!text2  ){
            const response = await updateCategoryApi(text,category.description,category.id);
            alert("Categoria  actualizada con exito");
           

        }else{
            const response = await updateCategoryApi(text,text2,category.id);
            alert("Categoria  actualizada con exito");

        }

        navigation.navigate('category')
     

      
   } catch (error) {
        console.error(error);
        alert("Error .....");
   }
  }
    
   
  return (
    <SafeAreaView >
         <TextInput
         style={styles.input}
         
        placeholder={category.name}
        keyboardType="default"
        onChangeText={setText}
        value={text}
       
    
        
      />
               <TextInput
         style={styles.input}
         
        placeholder={category.description}
        keyboardType="default"
        onChangeText={setTex2}
        value={text2}
      
      />
       
      
      <Button title="Editar Categoria" onPress={editar} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  