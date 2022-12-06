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
        alert("Categoria  Agregada con exito");
        navigation.navigate('category')
     } catch (error) {
          console.error(error);
          alert("Error.....");  
      }
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
        <TextInput
        style={styles.input}
        placeholder="Descripcion"
        autoCapitalize='none'
        value={formik.values.description}
        onChangeText={(text)=> formik.setFieldValue('description', text)}
      />
       
      
      <Button title="Agregar Categoria" onPress={formik.handleSubmit}/>
      <Text style= {styles.errors}>{formik.errors.cate} </Text>
      <Text style= {styles.errors}>{formik.errors.description} </Text>

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
    borderRadius: 10,
  },
  errors: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  }
  });
  