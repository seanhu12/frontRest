import React,{useState,useEffect,useContext} from 'react'
import { Text, SafeAreaView ,View} from 'react-native'
import PedidosCard from '../../component/client/Pedido/PedidosCard';

import PedidosList from '../../component/client/Pedido/PedidosList';

import RestaurantContext from '../../RestaurantContext';


export default function ClientCarritoScreen(props){
    
  const {navigation} = props;

  const {carro,setCarro} = useContext(RestaurantContext)
  const {mesa,setMesa} = useContext(RestaurantContext)

 


  const newProduct = carro.filter((carro) => carro.table == mesa.id)
  
 
  
    return (
      <SafeAreaView>

        <PedidosList carr ={newProduct} />
      

      </SafeAreaView>
    )
  
}

/**/
