
import {SafeAreaView } from 'react-native'
import React, {useState,useEffect,useContext} from 'react'
import {getMesaApi} from "../../api/mesas"

import MesaList from '../../component/client/Mesa/MesaList';





export default function MesaScreen() {

    const [mesas,setmesas] = useState([])

    //Ejecuta codigo
    useEffect(() => {
        (async () => {   
            await loadMesa(); 
        })()
    },[])

    // carga las mesas de la base de datos
    const loadMesa = async () => {

        //espera una respuesta
        try {
            const response = await getMesaApi();
            setmesas([...response])
        } catch (error) {
            console.error(error);
        }
        
    } 
    return (
        <SafeAreaView>

            <MesaList mesas = {mesas}   />
        </SafeAreaView>
    )
  
}
