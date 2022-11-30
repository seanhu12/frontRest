import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import {RestaurantProvider} from "./src/RestaurantContext"
import { Provider as PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    <PaperProvider>
      <RestaurantProvider>
        <NavigationContainer>
        <NavigationDrawer />
        </NavigationContainer>

     </RestaurantProvider>

    </PaperProvider>

    

   

  );
}

