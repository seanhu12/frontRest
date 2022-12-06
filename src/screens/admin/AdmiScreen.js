import React from 'react'
import { Text, View , StyleSheet, ImageBackground} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import { Button , Divider} from 'react-native-paper';




export default function AdmiScreen(props) {
  const navigation = useNavigation();

  


    const categoria = () => {

    navigation.navigate("category")
    
  }

  const pruducto = () => {

    

    
    navigation.navigate("product",)
    

  }
  const pedido = () => {

    

    
    navigation.navigate("orders",)
    

  }


    return (
      <View style= {styles.container}>
        
        <Button  mode="contained" onPress={categoria} style= {styles.top} >
              Categoria
           </Button>
           <Divider />
           <Button  mode="contained" onPress={pruducto}  style= {styles.top} >
              Producto
           </Button>
           <Divider />
           <Button  mode="contained" onPress={pedido}  style= {styles.top}>
              Pedido
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
  },

});


