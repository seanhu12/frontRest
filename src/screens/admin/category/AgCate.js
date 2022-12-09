import axios from 'axios';
import React,{useState, useEffect,useContext} from 'react'
import {useNavigation} from "@react-navigation/native"
import {Text,TextInput,SafeAreaView,StyleSheet, Image,Platform,View,Button } from "react-native"
import {useFormik} from "formik";
import * as Yup from "yup";
import {addCategoryApi} from "../../../api/category"

export default function AgCate() {

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {cate: "", description: ""},
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await addCategoryApi(formValue.cate,formValue.description);     
       
     } catch (error) {
          console.error(error);
    
      }
      navigation.navigate('category')
    }
  })
   
  return (
    <SafeAreaView >
      <Text style= {styles.errors}>{formik.errors.cate} </Text>
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        autoCapitalize='none'
        value={formik.values.cate}
        onChangeText={(text)=> formik.setFieldValue('cate', text)}
      />
       <Text style= {styles.errors}>{formik.errors.description} </Text>

      <TextInput
        style={styles.input}
        placeholder="Descripcion"
        autoCapitalize='none'
        value={formik.values.description}
        onChangeText={(text)=> formik.setFieldValue('description', text)}
      />
     

      
      <Button title="Agregar Categoria" onPress={formik.handleSubmit}/>
      
      
    </SafeAreaView>
  )
}
function validationSchema () {
  return {
    cate: Yup.string().required("Falta en nombre de la categoria"),
    description: Yup.string().required("Falta la descripcion de la categoria")
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  errors: {
    textAlign: "center",
    color: "#f00",
    marginTop: 5,
  }
  });
  