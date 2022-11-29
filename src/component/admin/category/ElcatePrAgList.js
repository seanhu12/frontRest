import React from 'react'
import { StyleSheet,Text,FlatList, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ElcatePrAgCard from './ElcatePrAgCard'





export default function ElcatePrAgList(props) {
  const {category} = props 


    return (
      <SafeAreaView>
                <FlatList
            data={category}
            numColumns= {1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(category) => String(category.id) }
            renderItem= {({item}) => <ElcatePrAgCard categorys = {item} />}
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