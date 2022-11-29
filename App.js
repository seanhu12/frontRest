import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import {RestaurantProvider} from "./src/RestaurantContext"
export default function App() {
  return (

    <RestaurantProvider>
        <NavigationContainer>
        <NavigationDrawer />
        </NavigationContainer>

    </RestaurantProvider>

   

  );
}

