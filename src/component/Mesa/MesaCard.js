import React from 'react'
import { StyleSheet, View,Text,Image,TouchableWithoutFeedback } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import {capitalize} from "lodash"

import axios from "axios";

const baseURL = "http://192.168.1.117:8000/api/boletas";

export default function MesaCard(props) {
  const{mesas,boletas} = props
  const navigation = useNavigation();
  


 

  const goToMenu = () => {

    
    /*  axios.post(baseURL, {
        tables_id: mesas.number,
        boleta_cod: boletas,
        total: 0
    
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); */
    
      navigation.navigate("client",{number: mesas.number,boletaCod: boletas})
    
  
    

  }
 
    return (
      <TouchableWithoutFeedback onPress={goToMenu}>
        <View style= {styles.card}>
          <View style={styles.spacing}>
            <View style = {styles.bgStyles}>
              <Text style={styles.name1}>{capitalize(mesas.number)} </Text>

            </View>
            <Image source={{uri: mesas.image}} style= {styles.image} />

          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  
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

