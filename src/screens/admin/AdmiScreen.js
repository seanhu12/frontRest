import React from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { Button, Divider } from 'react-native-paper';




export default function AdmiScreen(props) {
  const navigation = useNavigation();




  const categoria = () => {

    navigation.navigate("category")

  }

  const pruducto = () => {




    navigation.navigate("product",)


  }


  return (
    <View style={styles.container}>

      <Button mode="contained" onPress={categoria} style={styles.top} >
        Categoria
      </Button>

      <Button mode="contained" onPress={pruducto} style={styles.top2} >
        Producto
      </Button>

      <Divider />



    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "beige",
    padding: 20,
    margin: 10,
  },
  top: {

    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 70

  },
  top2: {

    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 50


  },

});


