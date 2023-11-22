import { View, ImageBackground, Animated, Easing,Pressable } from 'react-native';
import { useEffect } from 'react';

export default function WelcomePage({navigation}){
    const textOpacity = new Animated.Value(0);

    const fadeIn = () => {
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => fadeOut());
    };
  
    const fadeOut = () => {
      Animated.timing(textOpacity, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => fadeIn());
    };
  
    useEffect(() => {
      fadeIn();
    }, []);
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('LogIn')}>
                <ImageBackground source={require('../../assets/images/welcome.png')} resizeMode="cover" style={{ height: '100%', justifyContent: 'center' }}>
                    <Animated.Text style={{textAlign: 'center', fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 100, backgroundColor: 'lightblue', opacity: textOpacity }}>
                        Toca la pantalla para iniciar
                    </Animated.Text>
                </ImageBackground>
            </Pressable>
        </View>
    );
}