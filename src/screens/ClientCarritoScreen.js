import React,{useState,useEffect} from 'react'
import { Text, SafeAreaView } from 'react-native'
import {getPedidosApi} from "../api/pedidos"
import PedidosList from '../component/Pedido/PedidosList';
import { TapGestureHandler } from 'react-native-gesture-handler';

export default function ClientCarritoScreen(props){
    
  const {navigation,route:{params},boletaCod} = props;


  
  

  const [pedidos,setpedidos] = useState([]);

  

 
  useEffect(()=>{
    (async () => {
      await  loadPedidos();    
      
    })()
  },[])

  const loadPedidos = async () => {

    try {
      
      const response = await getPedidosApi();

      
      

      
      const PedidosArray = []

      
      var x = new Boolean(TapGestureHandler)
      var a = new Number('0');

      while (x){

        const obj = response[a];
        if (obj){
          if (obj.tables_number == params.mesa && obj.estado == "enProceso" && obj.boletas_cod == params.boletaCod){
            PedidosArray.push({
              id: obj.id,
              name: obj.products_name,
              
            })
          }
            a++;
        }else{
            a = 0;
            x = false
        }

    }
      setpedidos([...PedidosArray]);



      
      
      } catch (error) {
      console.error(error);
    }

  }

  
    return (
      <SafeAreaView>
       <PedidosList pedidos={pedidos} />
      </SafeAreaView>
    )
  
}
