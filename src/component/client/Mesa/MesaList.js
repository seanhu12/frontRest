import React from 'react'
import { StyleSheet,Text,FlatList, ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


import MesaCard from "./MesaCard"

export default function MesaList(props) {
  const {mesas} = props




  
  


 
    return (
      <SafeAreaView>
                <FlatList
            data={mesas}
            numColumns= {2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(mesas) => String(mesas.id) }
            renderItem= {({item}) => <MesaCard mesas = {item} />}
            contentContainerStyle={styles.FlatListContentContainer}
            ListFooterComponent={
              mesas.length == 0 && (
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

