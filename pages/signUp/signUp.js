import { ImageBackground, TextInput, StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import CustomButton from '../../components/customButton';
import { useSession } from '../../session/sessionContext';
import { postUser } from '../../endpoints/user';
import React, { useRef, useState } from 'react';

export default function SignUpPage({ navigation }) {
    const { setData } = useSession();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const passwordInputRef = useRef(null);
    const userInputRef = useRef(null);

    const handleSignUp = async (user, password, email) => {
        const response = await postUser(user, password, email);
        if (response.error) {
            setError(true);
            setErrorMessage(response.error);
            return;
        }
        const userData = response;
        setData(userData);
        navigation.navigate('MainMenu')
    };

    const handleDonePress = () => {
        handleSignUp(user, password, email);
        Keyboard.dismiss();
    };

    handleEmailChange = (text) => {
        setEmail(text);
    };

    handleUserChange = (text) => {
        setUser(text);
    };

    handlePasswordChange = (text) => {
        setPassword(text);
    };

    return (
        <ImageBackground source={require('../../assets/images/background.png')} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%', alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', fontFamily: 'coiny-regular' }}>Crea una cuenta</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Correo"
                placeholderTextColor="white"
                value={email}
                onChangeText={handleEmailChange}
                returnKeyType="next"
                onSubmitEditing={() => userInputRef.current.focus()}
            />
            <TextInput
                ref={userInputRef}
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
                    <Text style={{ color: 'red', fontSize: 12, fontWeight: 'bold', fontFamily: 'coiny-regular' }}>{errorMessage}</Text>
                }
            </View>
            <View style={{ height: 100, flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <CustomButton viewStyle={styles.tab_button} title="Crear" onPress={() => handleSignUp(user, password, email)} />
                <CustomButton viewStyle={styles.tab_button_c} title="Cancelar" onPress={() => navigation.goBack()} />

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
    tab_button: {
        width: 100,
        height: 50,
        backgroundColor: '#669cc4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
    },
    tab_button_c: {
        width: 100,
        height: 50,
        backgroundColor: '#c46666',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
    }
});