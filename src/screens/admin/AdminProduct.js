import React from 'react'
import { StyleSheet,View } from 'react-native'
import { Button , Divider} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native"


export default function AdminProduct(props) {

  const navigation = useNavigation();
  

  const agregar = () => {

   navigation.navigate('listcate');

  }
  const editar = () => {
  
    navigation.navigate('listProdEd');

    


    

  }
  const eliminar = () => {
    navigation.navigate('elimProd');

    

  }
  


    return (
      <View style={styles.container}>
  

        
      <Button  mode="contained" onPress={agregar} style= {styles.top} >
            Agregar
      </Button>
      <Divider />
      <Button  mode="contained" onPress={editar} style= {styles.top} >
           Editar
      </Button>
      <Divider />
     
      <Button  mode="contained" onPress={eliminar} style= {styles.top} >
            Eliminar
      </Button>
      <Divider />

   </View>

    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "beige",
      padding: 20,
      margin: 10,
    },
    top: {
      
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  
  });
  