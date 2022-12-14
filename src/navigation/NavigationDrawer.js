import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"

import ClientNavigation from "./ClientNavigation";
import AdminNavigation from "./AdminNavigation";
import HomeNavigation from "./HomeNavigation";


const Drawer = createDrawerNavigator();

export default function NavigationDrawer(){

    return(
        <Drawer.Navigator>
           
            <Drawer.Screen name="home" component={HomeNavigation} options={{title:"Inicio "}} />

            <Drawer.Screen name="client" component={ClientNavigation} options= {{title:"Cliente"}} />
            <Drawer.Screen name="admin" component={AdminNavigation} options={{title: "Admin"}} />
            
        </Drawer.Navigator>
    )

}

