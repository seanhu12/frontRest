import React,{useState,useEffect} from 'react'
import { StyleSheet,Text,FlatList,Image,TouchableWithoutFeedback,View} from 'react-native'
import { Button, Modal, Portal } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import {DeleteProduct} from "../../../api/products"
import { capitalize } from "lodash"
import {useNavigation} from "@react-navigation/native"




export default function ElimiProd(props) {
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const navigation = useNavigation();
  const {products, category} = props 
  const [id,setid] = useState();
  const [viewCont,setViewCont] = useState(false)


  const goToProduct = (item) => {
    setViewCont(true)
    setid(item.id)

}

const Eliminar = async() => {
    try {
        const response = await DeleteProduct(id)
      
        navigation.navigate("admin")
        alert('Producto eliminado')
        
    } catch (error) {
        
    }

}

  const Item = ({item}) => (
    <TouchableWithoutFeedback onPress={() => goToProduct(item)} >
    <View style={styles.card}>
        <View style={styles.spacing}>
            <View style={styles.bgStyles}>

                <Text style={styles.number}>${`${item.price}`.padStart(4, 0)} </Text>
                <Text style={styles.name1}> {capitalize(item.name)} </Text>
            </View>
            <Image source={{ uri: item.image }} style={styles.image} />

        </View>
    </View>

   </TouchableWithoutFeedback>

)

const renderItem = ({item}) => (
    <Item item = {item} /> 
)



    return (
      <SafeAreaView>
              
        
                <FlatList
            data={products}
            numColumns= {2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(products) => String(products.id) }
            renderItem= {renderItem}
            contentContainerStyle={styles.FlatListContentContainer}
           
            />
             <Portal>

                    <Modal visible= {viewCont} contentContainerStyle={containerStyle}> 
                      


                            <Button  mode="contained" onPress={() => Eliminar()}>
                               Eliminar
                            </Button>
                            <Button  mode="contained" onPress={() => setViewCont(false)}>
                                   Cancelar
                            </Button>


                    </Modal>


            </Portal>

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
