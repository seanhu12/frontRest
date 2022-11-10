import React from 'react'
import { StyleSheet, View,Text,Image,TouchableWithoutFeedback } from 'react-native'
import ClientCarritoScreen from '../screens/ClientCarritoScreen';
import {capitalize} from "lodash"


export default function ProductCard(props) {

    const {product} = props;

    const goToProduct = () => {
        console.log(`Usted Ordeno: ${product.name}`);
        
        <ClientCarritoScreen product = {product} />
    

    }
  
    return (
      <TouchableWithoutFeedback onPress={goToProduct} >
        <View style = {styles.card}>
            <View style= {styles.spacing}>
                <View style = {styles.bgStyles}>
                  
                  <Text style= {styles.number}>${`${product.price}`.padStart(4,0) } </Text>
                  <Text style = {styles.name1}> {capitalize(product.name)} </Text>
                </View>
                <Image source={{uri: product.image}} style= {styles.image} />
                
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
  
}


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
