import React,{useState} from 'react'
import { Text, View ,Button,TextInput, StyleSheet,SafeAreaView } from 'react-native'
import {useNavigation} from "@react-navigation/native"


export default function AdminCategory(props) {

  const navigation = useNavigation();
  

  const agregar = () => {

   navigation.navigate('agregarCat');

  }
  const editar = () => {
    navigation.navigate('editarCat');


    

  }
  const eliminar = () => {
    navigation.navigate('elimCat');
    

  }
  


    return (
      <SafeAreaView>

        <Button title='Agregar' onPress={agregar}/>
        <Button title='Editar' onPress={editar}/>
        <Button title='Eliminar' onPress={eliminar}/>

    </SafeAreaView>
    )
  
}
