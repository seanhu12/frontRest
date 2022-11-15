import React from 'react'
import { StyleSheet,Text,FlatList,Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from "@react-navigation/native"
import ProductCard from "./ProductCard"

export default function ProductList(props) {
    const {products,boletaCod,mesa} = props
    const navigation = useNavigation();

    

    






    
    const creaBoleta = () => {
    
        navigation.navigate("carrito",{mesa: mesa,boletaCod: boletaCod})
    
      }



    
    return (
        <SafeAreaView>
                    <FlatList 
                data ={products}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(product) => String(product.id)}
                renderItem = {({item}) => <ProductCard product = {item} boletaCod= {boletaCod} />}
                contentContainerStyle={styles.FlatListContentContainer}

                />

                <Button onPress={creaBoleta} title="Carrito" ></Button>


        </SafeAreaView>

        
       
    )
  
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,

    }
})