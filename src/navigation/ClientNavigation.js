import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import ClientScreen from "../screens/Client/ClientScreen";
import MesaScreen from "../screens/Client/MesaScreen"
import ClientCarritoScreen from "../screens/Client/ClientCarritoScreen";
import Icon,{} from "react-native-vector-icons/FontAwesome5";

import Pago from "../screens/Client/Pago";


const Stack = createStackNavigator();

export default function ClientNavigation(){

    return(
        <Stack.Navigator>
            
            <Stack.Screen name='mesas' component={MesaScreen} options={{title: "Elija su Mesa", headerLeft: ()=> (
            <Icon name="arrow-right" style={{left: 20 }} size={20} />
             )}} />
  
            <Stack.Screen name="client" component={ClientScreen} options={{title: "Cliente"}} />

            <Stack.Screen name="carrito" component={ClientCarritoScreen} options={{title: "Carrito"}} />
            <Stack.Screen name="pago" component={Pago} options={{title: "Carrito"}} />
            
        </Stack.Navigator>
    )
}