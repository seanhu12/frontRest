import React,{useState,useEffect,useContext} from 'react'
import {Button,TextInput,SafeAreaView,StyleSheet,Platform,Image} from "react-native"
import RestaurantContext from "../../../RestaurantContext"
import {useNavigation} from "@react-navigation/native"

import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

import {API_HOST} from "../../../utils/constants"
import {addProductApi} from "../../../api/products"

export default function AgProduct() {


  const { category,setCategory} = useContext(RestaurantContext)
  const navigation = useNavigation();
    

    const [nombre,setNombre] = useState();
    const [description,setDescription] = useState();
    const [price,setPrice] = useState();
    const [amount,setAmount] = useState();
    const [selectedImage, setSelectedImage] = useState(ImagePicker.ImageInfo);

    const pickImage = async () => {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      console.log(pickerResult);
      if (pickerResult.cancelled === true) return;
      setSelectedImage(pickerResult);

    };

  

   

    const uploadImage = async () => {

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

          const response = await addProductApi(nombre,category.id,description,data.url,price,amount)

          
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
    };
    
  return (
    <SafeAreaView >
         <TextInput
         style={styles.input}
         
        placeholder="Nombre"
        keyboardType="default"
        onChangeText={setNombre}
        value={nombre}
      />
       <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Descripcion"
        keyboardType="default"
      />
       <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="Precio"
        keyboardType="numeric"
      />
         <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Cantidad"
        keyboardType="numeric"
      />
        {selectedImage ? (
        <>
          <Image source={{uri: selectedImage.uri}}  style={styles.thumbnail} />
          <Button onPress={uploadImage} title="Agregar" />
        </>
      ) : (
        
        <Button onPress={pickImage} title="Ingrese imagen" />
      )}
     

    
     

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
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain",
      marginBottom: 50,
    },
  });
  