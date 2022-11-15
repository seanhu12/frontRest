import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import ClientScreen from "../screens/ClientScreen";
import MesaScreen from "../screens/MesaScreen"
import ClientCarritoScreen from "../screens/ClientCarritoScreen";


const Stack = createStackNavigator();

export default function ClientNavigation(){

    return(
        <Stack.Navigator>
            
            <Stack.Screen name='mesas' component={MesaScreen} options={{title: "Elija su Mesa"}} />
            <Stack.Screen name='menu' component={ClientNavigation} options={{title: "Menu"}} />
            <Stack.Screen name="client" component={ClientScreen} options={{title: "Cliente"}} />
            <Stack.Screen name="carrito" component={ClientCarritoScreen} options={{title: "Carrito"}} />
            
        </Stack.Navigator>
    )
}