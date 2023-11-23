import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import WelcomePage from "./pages/welcomePage/welcomePage";
import LogInPage from "./pages/LogIn/logIn";
import MainMenuPage from "./pages/mainMenu/mainMenu";
import Question from "./components/question";
import Help from "./components/help";
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
        <Stack.Group>
          <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }}/>
          <Stack.Screen name="LogIn" component={LogInPage} options={{ headerShown: false }}/>
          <Stack.Screen name="MainMenu" component={MainMenuPage} options={{ headerShown: false }}/>
          <Stack.Screen name="Question" component={Question} options={{ headerShown: false }}/>
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Help" component={Help} options={{ headerShown: false }}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const Stack = createStackNavigator();



