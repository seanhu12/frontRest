
import {SafeAreaView } from 'react-native'
import React, {useState,useEffect} from 'react'
import {getMesaApi} from "../api/mesas"
import {getBoletaaApi} from "../api/boletas"
import {getPedidosApi} from "../api/pedidos"
import MesaList from "../component/Mesa/MesaList";
import { TapGestureHandler } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated'



export default function MesaScreen() {

    const [mesas,setmesas] = useState([])

    const [Boleta,setBoletas] = useState([]);
 

    var mayor = new Number(0);




    useEffect(() => {
        (async () => {
           
            await loadBoleta();
            await loadMesa();
            
        })()
    },[])


    const loadMesa = async () => {
        try {
            const response = await getMesaApi();
            
            const mesasArray= []

           
            var x = new Boolean(TapGestureHandler)
            var a = new Number('0');
            

            while (x){

                const mesa = response[a];
                if (mesa){
                    mesasArray.push ({
                        id: mesa.id,
                        number: mesa.number,
                        image: mesa.image
                        
                    })
                    a++;
                }else{
                    a = 0;
                    x = false
                }

            }

            

            setmesas([...mesasArray])
        } catch (error) {
            console.error(error);
        }
        
    } 

    const loadBoleta = async () => {

        try {
          
          const response = await getBoletaaApi();
    
        
    
          
          const BoletaArray = []
    
          
          var z = new Boolean(TapGestureHandler)
          var b = new Number('0');
         
          
          
    
          while (z){
    
            
            const obj = response[b];
            if (obj){
              if (obj.boleta_cod >= mayor){
                    mayor = obj.boleta_cod+1;
             }
              BoletaArray.push({
                id: obj.id,
                cod: obj.boleta_cod,
                codMayor: mayor
              })
                b++;
            }else{
                b = 0;
                z = false
            }

            
                setBoletas(mayor)

        
            
        }
          
          } catch (error) {
          console.error();
        }
    
      }
    



  
    return (


        <SafeAreaView>

            <MesaList mesas = {mesas} boletas = {Boleta}  />
        </SafeAreaView>
    )
  
}
