import React from 'react'
import { StyleSheet,Text,FlatList,Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from "@react-navigation/native"
import PedidosCard from "./PedidosCard"

export default function PedidosList(props) {
    const {pedidos} = props
    const navigation = useNavigation();

    
    const Pagar = () => {
    
        
    
      }



    
    return (
        <SafeAreaView>
                    <FlatList 
                data ={pedidos}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pedido) => String(pedido.id)}
                renderItem = {({item}) => <PedidosCard pedidos = {item} />}
                contentContainerStyle={styles.FlatListContentContainer}

                />

                


        </SafeAreaView>

        
       
    )
  
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,

    }
})
