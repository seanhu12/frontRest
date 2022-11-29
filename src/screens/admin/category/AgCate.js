import axios from 'axios';
import React,{useState, useEffect,useContext} from 'react'
import {useNavigation} from "@react-navigation/native"
import {Text,TextInput,SafeAreaView,StyleSheet, Image,Platform,View,Button } from "react-native"

import {addCategoryApi} from "../../../api/category"

export default function AgCate() {
  const [text2, setTex2]= useState();
  const [text,setText] = useState();
  const navigation = useNavigation();
  



  const  enviar  = async () =>{
    
    try {
      const response = await addCategoryApi(text,text2);  
      alert("Categoria  Agregada con exito");
   } catch (error) {
        console.error(error);
        alert("Error.....");  
   }
   navigation.navigate('category')
  }
    

   
   
  return (
    <SafeAreaView >
         <TextInput
         style={styles.input}
         
        placeholder="Nombre"
        keyboardType="default"
        onChangeText={setText}
        value={text}
      />
               <TextInput
         style={styles.input}
         
        placeholder="Descripcion"
        keyboardType="default"
        onChangeText={setTex2}
        value={text2}
      />
       
      
      <Button title="Agregar Categoria" onPress={enviar} />

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
  