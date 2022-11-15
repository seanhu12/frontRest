import React from 'react'
import { StyleSheet,Text,FlatList, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


import MesaCard from "./MesaCard"

export default function MesaList(props) {
  const {mesas,boletas} = props




  
  

 
 
    return (
      <SafeAreaView>
                <FlatList
            data={mesas}
            numColumns= {2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(mesas) => String(mesas.id) }
            renderItem= {({item}) => <MesaCard mesas = {item}  boletas={boletas}  />}
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

