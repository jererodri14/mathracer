import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import WelcomePage from "./pages/welcomePage/welcomePage";
import LogInPage from "./pages/LogIn/logIn";
import MainMenuPage from "./pages/mainMenu/mainMenu";
import { useEffect } from 'react';
import * as Font from 'expo-font';
import { StatusBar} from 'react-native';

export default function App() {
  useEffect(() => {
    const loadFontAsync = async () => {
      await Font.loadAsync({ 
        'coiny-regular': require('./assets/fonts/Coiny-Regular.ttf'),
      });
    };

    loadFontAsync();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName='WelcomePage'>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="LogIn" component={LogInPage} options={{ headerShown: false }}/>
        <Stack.Screen name="MainMenu" component={MainMenuPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const Stack = createStackNavigator();



