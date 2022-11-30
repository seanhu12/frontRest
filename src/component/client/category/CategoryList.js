import React from 'react'
import { StyleSheet,Text,FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryCard from "./CategoryCard"
import { Button, TextInput, Modal, Portal } from 'react-native-paper';
import {useNavigation} from "@react-navigation/native"



export default function CategoryList(props) {
  const {category} = props
  const navigation = useNavigation();
  const creaBoleta = () => {
    
    navigation.navigate("carrito")

}


 
    return (
      <SafeAreaView>
                <FlatList
            data={category}
            numColumns= {1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(category) => String(category.id) }
            renderItem= {({item}) => <CategoryCard categorys = {item} />}
            contentContainerStyle={styles.FlatListContentContainer}
           
            />

            <Button onPress={creaBoleta} mode="contained" > Carrito</Button>

      </SafeAreaView> 

     

    
    )
  
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
      paddingHorizontal: 5,

  },
  card: {
    flex:1,
    height: 130
},
spacing: {
    flex:1,
    padding: 5
},
bgStyles: {
    backgroundColor: "grey",
},
number:{
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,

},
name1 :{
    color:"#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
},
image:{
    position: "absolute",
    bottom:2,
    right: 50,
    width: 90,
    height: 90,
}
})