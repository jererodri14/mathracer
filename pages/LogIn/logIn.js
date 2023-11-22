import {ImageBackground, TextInput, StyleSheet, Image, Button, Text, View} from 'react-native';

export default function LogInPage(){
    return(
        <ImageBackground source={require('../../assets/images/background.png')} style={{width: '100%', height: '100%', alignItems:'center'}}>
            <Image resizeMode='contain' source={require('../../assets//icons/icon.png')} style={styles.icon}/>
            <View style={{width: 300, alignItems: 'center', marginBottom: 10}}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Inicia sesión con tus credenciales</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor="white"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="white"
            />
            <Button title="Iniciar Sesión" color="#669cc4" />
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
        marginVertical: 100,
        height: 300,
        width: 300,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
    }
  });