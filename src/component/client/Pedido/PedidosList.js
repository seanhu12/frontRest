import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet,Text,FlatList,Button, ToastAndroid} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from "@react-navigation/native"
import {addProductApi} from "../../../api/pedidos"
import {addBoletaApi,getBoletaaApi} from "../../../api/boletas"
import PedidosCard from "./PedidosCard"
import RestaurantContext from '../../../RestaurantContext'


export default function PedidosList(props) {
    const {carr} = props
    const navigation = useNavigation();

    
    const {mesa,setMesa} = useContext(RestaurantContext)
    const {carro,setCarro} = useContext(RestaurantContext)
    const {total,settotal} = useContext(RestaurantContext)
    

    var b = Number('0')

    useEffect(()=>{
      for (let index = 0; index < carr.length; index++){
        b = b + (parseInt(carr[index].price)*carro[index].cant)
      }

      settotal(b)
       
    },[])
    
    const Pagar = async () => {

      var idBol = 1;

      await addBoletaApi(total,mesa.id)
      const response = await getBoletaaApi()

      for (let i = 0; i < response.length; i++) {
         idBol = response[i].id 
      }
      console.log(idBol);
      
      for (let index = 0; index < carr.length; index++) {
         try {
           
            await addProductApi(carr[index],mesa.id,idBol)

            navigation.navigate('pago')
            
         } catch (error) {
            throw error
         }
        
       } 
       
     }

     const eliminar =  () => {

       setCarro([])
       settotal(0)
 
     
      }



    
    return (
        <SafeAreaView>
                    <FlatList 
                data ={carr}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(carr) => String(carr.name)}
                renderItem = {({item}) => <PedidosCard carro = {item} />}
                contentContainerStyle={styles.FlatListContentContainer}

                />
                <Text>El total es de: {total} </Text>
                
                <Button title='Pedir' onPress={Pagar}/>
                <Button title='Cancelar' onPress={eliminar}/>

                


        </SafeAreaView>

        
       
    )
  
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,

    }
})
