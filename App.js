import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from "./pages/welcomePage/welcomePage";
import LogInPage from "./pages/login/logIn";
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

const Stack = createNativeStackNavigator();


