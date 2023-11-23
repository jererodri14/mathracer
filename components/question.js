import { ImageBackground, View, StyleSheet, Text, Image, Pressable } from "react-native";
import CustomButton from "./customButton";

export default function Question({navigation}){
    return(
        <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', alignItems:'center', gap: 10}}>
            <View style={styles.top_view}>
                <CustomButton iconSrc={require('../assets/icons/back-arrow.png')} viewStyle={ styles.option } onPress={()=> navigation.goBack()}/>
                <Pressable onPress={()=> navigation.navigate('Help')}>
                    <Image source={require('../assets/icons/help.png')} style={{width: 50, height: 50}}/>
                </Pressable>
            </View>
            <View style={styles.question}>
                <Text style={[styles.question_text]}>¿Cuál es el nombre del primer presidente de Costa Rica?</Text>
            </View>
            <View style={styles.answers}>
                <CustomButton viewStyle={ styles.option} title="José María Castro Madriz" />
                <CustomButton viewStyle={ styles.option} title="Juan Rafael Mora Porras" />
                <CustomButton viewStyle={ styles.option } title="Braulio Carrillo Colina" />
                <CustomButton viewStyle={ styles.option } title="Juanito Mora Porras" />
            </View>
            <View style={styles.bottom_view}>
                <CustomButton viewStyle={ styles.icons } iconSrc={require('../assets/icons/comodin.png')} title='x1'/>
                <CustomButton viewStyle={ styles.icons } iconSrc={require('../assets/icons/comodin.png')} title='x1'/>
                <CustomButton viewStyle={ styles.icons } iconSrc={require('../assets/icons/comodin.png')} title='x1'/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    question:{
        height: 350,
        width: 350,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    question_text:{
        fontFamily: 'coiny-regular',
        color: 'white',
    },
    answers:{
        height: 350,
        width: 350,
        borderRadius: 30,
        gap: 10,
    },
    option: {
        height: 50,
        backgroundColor: '#669cc4',
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
    },
    top_view:{
        width: '100%',
        flexDirection: 'row',
        height: 100,
        padding: 10,
        justifyContent: 'space-between',
    },
    bottom_view:{
        width: '100%',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
    },
    icons:{
        height: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'coiny-regular',
        width: 100,
    }
})