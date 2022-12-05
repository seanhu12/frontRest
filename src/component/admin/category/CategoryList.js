import React from 'react'
import { StyleSheet,Text,FlatList, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryCard from "./CategoryCard"




export default function CategoryList(props) {
  const {category} = props 
    return (
      <SafeAreaView>
                <FlatList
            data={category}
            numColumns= {2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(category) => String(category.id) }
            renderItem= {({item}) => <CategoryCard categorys = {item} />}
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

