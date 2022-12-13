import React, {useContext} from 'react'
import { StyleSheet, View,Text,Image,TouchableWithoutFeedback } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import {capitalize} from "lodash"
import RestaurantContext from '../../../RestaurantContext'



export default function MesaCard(props) {
  const{mesas} = props
  const navigation = useNavigation();
  
  const {setMesa} = useContext(RestaurantContext)

 
  //navegacion hacia el menu
  const goToMenu = () => {

    //cuardamos la mesa seleccionada en un context
    setMesa(mesas)

    
    navigation.navigate("client",)
    

  }
 
    return (
      <TouchableWithoutFeedback onPress={goToMenu}>
        <View style= {styles.card}>
          <View style={styles.spacing}>
            <View style = {styles.bgStyles}>
              <Text style={styles.name1}>{capitalize(mesas.number)} </Text>
            </View>

            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJoIqm294W06VXC6CivT9KjbCyGiVGJzS5QgJRn0kxToVELu4s3Qxw7lt1NqtCtI48lk&usqp=CAU" }} style={styles.image} />


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

