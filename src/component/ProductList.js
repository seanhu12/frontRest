import React from 'react'
import { StyleSheet,Text,FlatList} from 'react-native'
import ProductCard from "./ProductCard"

export default function ProductList(props) {
    const {products} = props
    

    
    return (

        
       <FlatList 
        data ={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(product) => String(product.id)}
        renderItem = {({item}) => <ProductCard product = {item} />}
        contentContainerStyle={styles.FlatListContentContainer}

        />
    )
  
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,

    }
})
