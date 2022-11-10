
import {SafeAreaView } from 'react-native'
import React, {useState,useEffect} from 'react'
import {getMesaApi} from "../api/mesas"
import MesaList from "../component/Mesa/MesaList";
import { TapGestureHandler } from 'react-native-gesture-handler';



export default function MesaScreen() {

    const [mesas,setmesas] = useState([])

    useEffect(() => {
        (async () => {
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


  
    return (
        <SafeAreaView>

            <MesaList mesas = {mesas} />
        </SafeAreaView>
    )
  
}
