import React from 'react'
import { Text, View,Image,StyleSheet,ImageBackground} from 'react-native'

//imagen estatica del inicio
const image = { uri: "https://i.pinimg.com/564x/c1/75/5d/c1755d4c69779b02e5736907e5467652.jpg" };

export default function HomeScreen() {
  

  
    return (

      <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
   
          </ImageBackground>
      </View>
    )
  
}

//estilos correspondientes
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

