import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet,Text,FlatList,Button, ToastAndroid, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation} from "@react-navigation/native"
import {addPedidApi} from "../../../api/pedidos"
import {addBoletaApi,getBoletaaApi} from "../../../api/boletas"
import PedidosCard from "./PedidosCard"
import RestaurantContext from '../../../RestaurantContext'



export default function PedidosList(props) {
    const {carr} = props
    const navigation = useNavigation();

    
    const {mesa} = useContext(RestaurantContext)
    const {carro,setCarro} = useContext(RestaurantContext)
    const {total,settotal} = useContext(RestaurantContext)
    const {carroAgregado,setCarroAgregado} = useContext(RestaurantContext)
    
   

    var b = Number('0')

    // ejecuta 
    useEffect(()=>{

      //total de objetos en el carrito

      for (let index = 0; index < carr.length; index++){
        b = b + (parseInt(carr[index].price)*carro[index].cant)
      }

      settotal(b)

       
    },[])


    
    const Pagar = async () => {
      setCarroAgregado(true)

      var idBol = 1;

      await addBoletaApi(total,mesa.id)
      const response = await getBoletaaApi()
  

      //obtengo la boleta recien creada 
       for (let i = 0; i < response.length; i++) {
          idBol = response[i].id      
        }


        //Agrega los pedidos a la base de datos
      for (let index = 0; index < carr.length; index++) {
         try {
           
            await addPedidApi(carr[index],mesa.id,idBol)
            
         } catch (error) {
            throw error
         }
        
       } 
       
     }

     //borra el carro
     const eliminar =  () => {


       setCarro([])
       settotal(0)
 
     
      }
      const time =  () => {
        navigation.navigate('pago')


      
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

                {carroAgregado == false && (
                  <View>
                     <Button title='Pedir' onPress={Pagar}/>
                     <Button title='Cancelar' onPress={eliminar}/>
                  </View>
                     
                      
                ) }
                {carroAgregado == true && (
                      <Button title='Tiempo estimado' onPress={time}/>
                ) }
                
                
                

                


        </SafeAreaView>

        
       
    )
  
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5,

    }
})
