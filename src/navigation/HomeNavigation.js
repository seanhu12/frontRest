import react from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Icon,{} from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function HomeNavigation(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} options={{title: "Bienvenido ", headerLeft: ()=> (
            <Icon name="arrow-right" style={{left: 20 }} size={20} />
             )}} />
        </Stack.Navigator>
    )
}