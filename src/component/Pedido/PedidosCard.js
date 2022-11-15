import React from 'react'
import { StyleSheet, View,Text,Image,TouchableWithoutFeedback } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import {capitalize} from "lodash"


export default function PedidosCard(props) {
  const{pedidos} = props
  const navigation = useNavigation();

  console.log(pedidos.name);

  const goToMenu = () => {

  }
 
    return (
      <TouchableWithoutFeedback >
        <View style= {styles.card}>
          <View style={styles.spacing}>
            <View style = {styles.bgStyles}>
              <Text style={styles.name1}> {capitalize(pedidos.name) } </Text>

            </View>
            

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

