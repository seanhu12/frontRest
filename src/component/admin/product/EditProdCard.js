import React, {useContext} from 'react'
import { StyleSheet, View,Text,Image,TouchableWithoutFeedback } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import {capitalize} from "lodash"
import  RestaurantContext from "../../../RestaurantContext"
import {DeleteCategoryApi} from "../../../api/category"

import axios from "axios";



export default function EditProdCard(props) {

  const navigation = useNavigation();
  const {cate,prod} = props

  

  const { product,setProduct} = useContext(RestaurantContext)
  const { category,setCategory} = useContext(RestaurantContext)

  
 

 
 //Guarda la categoria y el producto en un usecontex y redirecciona al form
  const goToForm = async () => {
    
    setProduct(prod);
    setCategory(cate);
     navigation.navigate('formEditProd')

  }
 
    return (
        <TouchableWithoutFeedback onPress={goToForm} >
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={styles.bgStyles}>

                    <Text style={styles.number}>${`${prod.price}`.padStart(4, 0)} </Text>
                    <Text style={styles.name1}> {capitalize(prod.name)} </Text>
                </View>
                <Image source={{ uri: prod.image }} style={styles.image} />

            </View>
        </View>
     </TouchableWithoutFeedback>
    )
  
}

//estilos correspondientes
const styles = StyleSheet.create({
  card: {
      flex:1,
      height: 130
  },
  spacing: {
      flex:1,
      padding: 5
  },
  bgStyles: {
      backgroundColor: "grey",
  },
  number:{
      position: "absolute",
      right: 10,
      top: 10,
      color: "#fff",
      fontSize: 11,

  },
  name1 :{
      color:"#fff",
      fontWeight: "bold",
      fontSize: 15,
      paddingTop: 10,
  },
  image:{
      position: "absolute",
      bottom:2,
      right: 50,
      width: 90,
      height: 90,
  }
  
})