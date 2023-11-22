import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import WelcomePage from "./pages/welcomePage/welcomePage";
import LogInPage from "./pages/login/logIn";
import MainMenuPage from "./pages/mainMenu/mainMenu";
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName='WelcomePage'>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="LogIn" component={LogInPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const Stack = createStackNavigator();


