import react from "react";
import {createStackNavigator} from "@react-navigation/stack"
import ClientCarritoScreen from "../screens/ClientCarritoScreen";

const Stack = createStackNavigator();

export default function ClientCarritoNavigation(){

    return(

        <Stack.Navigator>
            <Stack.Screen name="carrito" component={ClientCarritoScreen} options={{title: "Carrito"}} />
        </Stack.Navigator>

    )
}
