import React ,{useContext} from 'react'
import { StyleSheet,Text,FlatList,Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from "@react-navigation/native"
import ProductCard from "./ProductCard"
import RestaurantContext from '../../../RestaurantContext'

export default function ProductList(props) {
    const {products,mesa} = props
    const navigation = useNavigation();

    const {category,setCategory} = useContext(RestaurantContext)

 
    const newProduct = products.filter((carro) => carro.category_id == category.id)

    
    const creaBoleta = () => {
    
        navigation.navigate("carrito")
    
      }



    
    return (
        <SafeAreaView>
                    <FlatList 
                data ={newProduct}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(product) => String(product.id)}
                renderItem = {({item}) => <ProductCard product = {item}  />}
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
