import { View, Image, ImageBackground, BackHandler, Text, StyleSheet, Alert } from 'react-native';
import CustomButton from '../../components/customButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useSession } from '../../session/sessionContext';
import { getAvatar } from '../../assets/avatars/avatars';


export default function MainMenuPage({ navigation }) {
    const { userData } = useSession();
    const salir = () => {
        Alert.alert('Espera', 'Estas seguro que quieres salir de MathRacer', [
            {
                text: 'Cancelar',
                onPress: () => null,
                style: 'cancel',
            },
            { text: 'Si', onPress: () => { navigation.navigate('WelcomePage'); BackHandler.exitApp() } },
        ]);
    };

    return (
        <ImageBackground
            source={require('../../assets/images/background.png')}
            style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', }}
        >

            <View style={styles.top_view}>
                <LinearGradient colors={['#2c4163', '#2b596e']} style={styles.top_view}>

                    <View style={styles.top_view_childs}>
                        <Image style={styles.icons} source={require('../../assets/icons/gold-coin.png')} />
                        <Text style={{ color: 'white', fontFamily: 'coiny-regular' }}>{userData.monedas}</Text>
                    </View>

                    <View style={[styles.top_view_childs, flexDirection = 'column']}>
                        <Image style={[styles.icons]} source={getAvatar(userData.avatares_id - 1)} />
                        <Text style={{ color: 'white', fontFamily: 'coiny-regular' }}>{userData.nombreUsuario}</Text>
                    </View>

                    <View style={styles.top_view_childs}>
                        <Image style={styles.icons} source={require('../../assets/icons/heart.png')} />
                        <Text style={{ color: 'white', fontFamily: 'coiny-regular' }}>{userData.vidas}</Text>
                    </View>
                </LinearGradient>
            </View>

            <View style={styles.center_view}>
                <Image style={styles.icon} source={require('../../assets/icons/icon.png')} />
                <Text style={{ color: 'white', fontSize: 30, fontFamily: 'coiny-regular' }}>MATHRACER</Text>
                <CustomButton viewStyle={styles.button} title="Jugar" onPress={() => navigation.navigate('Category')} />
                <CustomButton viewStyle={styles.button} title="Tienda" onPress={() => navigation.navigate('Shop')} />

            </View>
            <View style={{ height: 100, flexDirection: 'row', gap: 10 }}>
                <CustomButton viewStyle={styles.tab_button} title="Perfil" onPress={() => navigation.navigate('Profile')} />
                <CustomButton viewStyle={styles.tab_button} title="Ranking" onPress={() => navigation.navigate('Ranking')} />
                <CustomButton viewStyle={styles.tab_button} title="Salir" onPress={salir} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    top_view: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
    },
    top_view_childs: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    icons: {
        height: 40,
        width: 40,
    },
    center_view: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#669cc4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
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
    icon: {
        height: 300,
        width: 300,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
    },
});

