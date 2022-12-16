import React,{useState, useEffect,useContext} from 'react'
import {Text,TextInput,SafeAreaView,StyleSheet, Image,Platform,View,Button } from "react-native"
import {useNavigation} from "@react-navigation/native"
import RestaurantContext from '../../../RestaurantContext';

import {updateCategoryApi} from "../../../api/category";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function formEdit() {
  const navigation = useNavigation();

  const { category,setCategory} = useContext(RestaurantContext)

   //Validaciones necesarias
  const formik = useFormik({
    initialValues: {cate: category.name, description: category.description},
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
    

      try {

        const response = await updateCategoryApi(formValue.cate,formValue.description,category.id);
       
        navigation.navigate('category')
     
      } catch (error) {
        
  
      }
      navigation.navigate('category')

      
    }
  })
   
  return (
    <SafeAreaView >
         <TextInput
        style={styles.input}
        placeholder="Categoria"
        autoCapitalize='none'
        value={formik.values.cate}
        onChangeText={(text)=> formik.setFieldValue('cate', text)}
      />
      <Text style= {styles.errors}>{formik.errors.cate} </Text>
        <TextInput
        style={styles.input}
        placeholder="Descripcion"
        autoCapitalize='none'
        value={formik.values.description}
        onChangeText={(text)=> formik.setFieldValue('description', text)}
      />
      <Text style= {styles.errors}>{formik.errors.description} </Text>
      <Button title="Editar Categoria" onPress={formik.handleSubmit}/>


      

    </SafeAreaView>
  )
 //Validaciones Yup
  function validationSchema () {
      return {
        cate: Yup.string().required("Rellene el nombre porfavot"),
        description: Yup.string().required("Rellene la descripcion porfavor")
      }
  }
}


//Estilos correspondientes
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    errors: {
      textAlign: "center",
      color: "#f00",
      marginTop: 20,
    }
  });
  