import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import ClientScreen from "../screens/ClientScreen";
import MesaScreen from "../screens/MesaScreen"

const Stack = createStackNavigator();

export default function ClientNavigation(){

    return(
        <Stack.Navigator>
            <Stack.Screen name='mesas' component={MesaScreen} options={{title: "Elija su Mesa"}} />
            <Stack.Screen name="client" component={ClientScreen} options={{title: "Cliente"}} />
            
        </Stack.Navigator>
    )
}