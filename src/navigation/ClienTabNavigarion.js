import React from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ClientNavigation from './ClientNavigation';
import ClientCarritoNavigation from './ClientCarritoNavigate';


const Tab = createBottomTabNavigator();
export default function ClienTabNavigarion() {
 
    return (
        <Tab.Navigator>
            <Tab.Screen name="menu" component={ClientNavigation} />
            <Tab.Screen name="carro" component={ClientCarritoNavigation} />
            
        </Tab.Navigator>
    )
  
}
