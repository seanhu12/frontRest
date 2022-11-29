
import {SafeAreaView } from 'react-native'
import React, {useState,useEffect,useContext} from 'react'
import {getMesaApi} from "../../api/mesas"

import MesaList from '../../component/client/Mesa/MesaList';
import RestaurantContext from '../../RestaurantContext';




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
