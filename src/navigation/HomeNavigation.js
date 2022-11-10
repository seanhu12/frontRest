import react from "react";
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function HomeNavigation(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} options={{title: "Bienvenido "}} />
        </Stack.Navigator>
    )
}