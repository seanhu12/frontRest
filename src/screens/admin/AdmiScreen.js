import React from 'react'
import { Text, View ,Button} from 'react-native'
import {useNavigation} from "@react-navigation/native"


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
      <View>




        <Button title='Categoria' onPress={categoria} />
        <Button title='Producto' onPress={pruducto}/>
        <Button title='Pedidos' onPress={pedido} />
       
    
      </View>
    )
  
}
