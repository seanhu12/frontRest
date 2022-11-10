import React from 'react'
import { StyleSheet,Text,FlatList} from 'react-native'
import MesaCard from "./MesaCard"

export default function MesaList(props) {
  const {mesas} = props
 
    return (

      <FlatList
      data={mesas}
      numColumns= {2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(mesas) => String(mesas.id)}
      renderItem= {({item}) => <MesaCard mesas = {item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      />
    )
  
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
      paddingHorizontal: 5,

  }
})

