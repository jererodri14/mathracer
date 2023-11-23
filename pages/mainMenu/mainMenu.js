import { useEffect } from 'react';
import { View, Image, ImageBackground, BackHandler,Text, StyleSheet, Alert} from 'react-native';
import  CustomButton  from '../../components/customButton';
import { LinearGradient } from 'expo-linear-gradient';


export default function MainMenuPage({navigation}){
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Espera', 'Estas seguro que quieres salir de MathRacer', [
            {
              text: 'Cancelar',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'Si', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);

    return(
        <ImageBackground 
            source={require('../../assets/images/background.png')} 
            style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',}}
            >

            <View style={styles.top_view}>
                <LinearGradient colors={['#2c4163', '#2b596e']} style={styles.top_view}>

                    <View style={styles.top_view_childs}>
                        <Image style={styles.icons}source={require('../../assets/icons/gold-coin.png')} />
                        <Text style={{color: 'white',fontFamily: 'coiny-regular'}}>3000</Text>
                    </View>

                    <View style={[styles.top_view_childs, flexDirection='column']}>
                        <Image style={[styles.icons]}source={require('../../assets/icons/user.png')} />
                        <Text style={{color: 'white',fontFamily: 'coiny-regular'}}>User</Text>
                    </View>

                    <View style={styles.top_view_childs}>
                        <Image style={styles.icons}source={require('../../assets/icons/heart.png')} />
                        <Text style={{color: 'white',fontFamily: 'coiny-regular'}}>3</Text>
                    </View>
                </LinearGradient>
            </View>

            <View style={styles.center_view}>
                <Image style={styles.icon} source={require('../../assets/icons/icon.png')} />
                <Text style={{color: 'white', fontSize: 30, fontFamily: 'coiny-regular'}}>MATHRACER</Text>
                <CustomButton viewStyle={styles.button} title="Jugar" onPress={() => navigation.navigate('Categories')} />
                <CustomButton viewStyle={styles.button} title="Perfil" onPress={() => navigation.navigate('Exit')} />
                
            </View>
            <View style={{height: 100 ,flexDirection: 'row', gap: 10}}>
                <CustomButton viewStyle={styles.tab_button} title="Tienda" onPress={() => navigation.navigate('Categories')} />
                <CustomButton viewStyle={styles.tab_button} title="Ranking" onPress={() => navigation.navigate('Exit')} />
                <CustomButton viewStyle={styles.tab_button} title="Salir"/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    top_view:{
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
    },
    tab_button: {
        width: 100,
        height: 50,
        backgroundColor: '#669cc4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        fontFamily: 'coiny-regular',
    },
    icon: {
        height: 300,
        width: 300,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
    },
});

