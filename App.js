import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from "./pages/welcomePage/welcomePage";
import LogInPage from "./pages/LogIn/logIn";
import MainMenuPage from "./pages/mainMenu/mainMenu";
import Question from "./components/question";
import Level from "./pages/level/level";
import Help from "./components/help";
import { useEffect } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'react-native';
import Category from './components/category';
import Level from './components/level';
import ProgressBar from './components/progress-bar';
import Profile from './components/profile';
import { SessionProvider } from './session/sessionContext';
import SignUp from './pages/signUp/signUp';



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
    <SessionProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName='WelcomePage'>
          <Stack.Group>
            <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
            <Stack.Screen name="LogIn" component={LogInPage} options={{ headerShown: false }} />
            <Stack.Screen name="MainMenu" component={MainMenuPage} options={{ headerShown: false }} />
            <Stack.Screen name="Question" component={Question} options={{ headerShown: false }} />
            <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
            <Stack.Screen name="Level" component={Level} options={{ headerShown: false }} />
            <Stack.Screen name="ProgressBar" component={ProgressBar} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Level" component={Level} options={{ headerShown: false }}/>
        </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SessionProvider>
  );
}

const Stack = createStackNavigator();



