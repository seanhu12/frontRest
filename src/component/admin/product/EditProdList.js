import React from 'react'
import { StyleSheet,FlatList,ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EditProdCard from './EditProdCard'





export default function EditProdList(props) {
  const {category,product} = props 


    return (
      <SafeAreaView>
                <FlatList
            data={product}
            numColumns= {2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(product) => String(product.id) }
            renderItem= {({item}) => <EditProdCard prod = {item} cate={category} />}
            contentContainerStyle={styles.FlatListContentContainer}
            ListFooterComponent={
              product.length == 0 && (
                <ActivityIndicator
                  size="large"
                  style={styles.spinner}
                  color="#AEAEAE"
                />
              )
            }
           
            />

      </SafeAreaView> 
    )
  
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
      paddingHorizontal: 5,

  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
})
