import React,{useState,useEffect,useContext} from 'react'
import {Button,TextInput,SafeAreaView,StyleSheet,Platform,Image,Text} from "react-native"
import RestaurantContext from "../../../RestaurantContext"
import {useNavigation} from "@react-navigation/native"

import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

import {API_HOST} from "../../../utils/constants"
import {addProductApi} from "../../../api/products"
import {useFormik} from "formik";
import * as Yup from "yup";

export default function AgProduct() {

  const { category,setCategory} = useContext(RestaurantContext)
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(ImagePicker.ImageInfo);


  //validaciones
  const formik = useFormik({
    initialValues: {name: "", description: "",price: "",amount: ""},
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      //verificacion de precio y cantidad negativas
      if(formValue.amount > 0 && formValue.price > 0){
              const uri =
              Platform.OS === "android"
                ? selectedImage.uri
                : selectedImage.uri.replace("file://", "");
            const filename = selectedImage.uri.split("/").pop();
            const match = /\.(\w+)$/.exec(filename);
            const ext = match?.[1];
            const type = match ? `image/${match[1]}` : `image`;
            const formData = new FormData();
            console.log(filename);

            formData.append("image", {
              uri,
              name: `image.${ext}`,
              type,
            } );

            try {
              const { data } = await axios.post(`${API_HOST}/upload`,formData,{
                headers: { "Content-Type": "multipart/form-data" },
              });

              //envio de la peticion 
              const response = await addProductApi(formValue.name,category.id,formValue.description,data.url,formValue.price,formValue.amount)

              
              if (!data.isSuccess) {
                alert("Error en agregar");
                return;
              }
              alert("Producto Agregado");
              navigation.navigate('product')

            } catch (err) {
              console.log(err);
              alert("Algo salio mal");
            } finally {
              setSelectedImage(undefined);
            }
      }else{
        alert('Recuerde "solo numeros positivos" ')
      }
         
    }
  })


    //Toma la imagen desde la galeria
  const pickImage = async () => {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      console.log(pickerResult);
      if (pickerResult.cancelled === true) return;
      setSelectedImage(pickerResult);

  };


    
  return (
    <SafeAreaView >
         <TextInput
         style={styles.input}
         
        placeholder="Nombre"
        autoCapitalize='none'
        value={formik.values.name}
        onChangeText={(text)=> formik.setFieldValue('name', text)}
      />
      <Text style= {styles.errors}>{formik.errors.name} </Text>
       <TextInput
        style={styles.input}
        placeholder="Descripcion"
        autoCapitalize='none'
        value={formik.values.description}
        onChangeText={(text)=> formik.setFieldValue('description', text)}
      />
       <Text style= {styles.errors}>{formik.errors.description} </Text>
       <TextInput
        style={styles.input}
        placeholder="Precio"
        autoCapitalize='none'
        value={formik.values.price}
        onChangeText={(text)=> formik.setFieldValue('price', text)}
      />
       <Text style= {styles.errors}>{formik.errors.price} </Text>
         <TextInput
        style={styles.input}
        placeholder="Cantidad"
        autoCapitalize='none'
        value={formik.values.amount}
        onChangeText={(text)=> formik.setFieldValue('amount', text)}
        
      />
      <Text style= {styles.errors}>{formik.errors.amount} </Text>
        {selectedImage ? (
        <>
          <Image source={{uri: selectedImage.uri}}  style={styles.thumbnail} />
          <Button onPress={formik.handleSubmit} title="Agregar" />
        </>
      ) : (
        
        <Button onPress={pickImage} title="Ingrese imagen" />
      )} 

    </SafeAreaView>
  )
}

//las restricciones de cada input 
function validationSchema () {
  return {
    name: Yup.string().required("Falta rellenar el nombre").matches("[A-Za-z]+","solo letras"),
    description: Yup.string().required("Falta rellenar la descripcion").matches("[A-Za-z]+","solo letras"),
    price: Yup.number().typeError("El precio tiene que ser un valor numerico").required("Falta rellenar el Precio"),
    amount: Yup.number().typeError("La cantidad tiene que ser un valor numerico").required("Falta rellenar la cantidad")
  }
}

// estilos correspontientes
const styles = StyleSheet.create({

    thumbnail: {
      width: 150,
      height: 150,
      resizeMode: "contain",
      marginBottom: 50,
      alignContent: "center",
      left: 120

    },
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
  