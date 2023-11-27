import { ImageBackground, TextInput, StyleSheet, Image, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import CustomButton from '../../components/customButton';
import { useSession } from '../../session/sessionContext';
import { getLogin } from '../../endpoints/login';
import React, { useRef, useState } from 'react';

export default function LogInPage({ navigation }) {
    const { setData } = useSession();
    const [error, setError] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const passwordInputRef = useRef(null);

    const handleLogin = async (user, password) => {
        const response = await getLogin(user, password);
        if (!response) {
            setError(true);
            return;
        }
        setError(false);
        const userData = response;
        setData(userData);
        navigation.navigate('MainMenu')
    };

    const handleDonePress = () => {
        handleLogin(user, password);
        Keyboard.dismiss();
    };

    handleUserChange = (text) => {
        setUser(text);
    };

    handlePasswordChange = (text) => {
        setPassword(text);
    };

    return (
        <ImageBackground source={require('../../assets/images/background.png')} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <Image resizeMode='contain' source={require('../../assets//icons/icon.png')} style={styles.icon} />
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', fontFamily: 'coiny-regular' }}>Inicia sesión con tus credenciales</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor="white"
                value={user}
                onChangeText={handleUserChange}
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current.focus()}
            />
            <TextInput
                ref={passwordInputRef}
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="white"
                secureTextEntry={true}
                value={password}
                onChangeText={handlePasswordChange}
                returnKeyType="done"
                onSubmitEditing={handleDonePress}
            />
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
                {error &&
                    <Text style={{ color: 'red', fontSize: 12, fontWeight: 'bold', fontFamily: 'coiny-regular' }}>Credenciales incorrectas.</Text>
                }
            </View>
            <View style={{ height: 100, flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <CustomButton viewStyle={styles.button} title="Iniciar Sesión" onPress={() => handleLogin(user, password)} />
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', fontFamily: 'coiny-regular' }}>¿No tienes una cuenta?</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 300,
        margin: 12,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        color: 'white',
    },
    icon: {
        marginTop: 100,
        marginBottom: 30,
        height: 300,
        width: 300,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
    },
    button: {
        height: 60,
        width: 300,
        margin: 12,
        color: 'white',
        backgroundColor: '#669cc4',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'coiny-regular',
        elevation: 5,
        borderRadius: 10,
    }
});