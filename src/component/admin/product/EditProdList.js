import React from 'react'
import { StyleSheet,Text,FlatList, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EditProdCard from './EditProdCard'





export default function EditProdList(props) {
  const {category,product} = props 


    return (
      <SafeAreaView>
                <FlatList
            data={product}
            numColumns= {1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(product) => String(product.id) }
            renderItem= {({item}) => <EditProdCard prod = {item} cate={category} />}
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
