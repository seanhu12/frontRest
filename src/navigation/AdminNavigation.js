import react from "react";
import {createStackNavigator} from "@react-navigation/stack"
import AdmiScreen from "../screens/AdmiScreen";

const Stack = createStackNavigator();

export default function AdminNavigation(){

    return(

        <Stack.Navigator>
            <Stack.Screen name="admin" component={AdmiScreen} options={{title: "Administrador"}} />
        </Stack.Navigator>

    )
}
