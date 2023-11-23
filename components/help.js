import { View, Text, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import CustomButton from "./customButton";

export default function Help({navigation}){
    return(
        <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', alignItems:'center', gap: 10}}>
            <View style={styles.top_view}>
                    <CustomButton iconSrc={require('../assets/icons/back-arrow.png')} viewStyle={ styles.option } onPress={()=> navigation.goBack()}/>
            </View>
            
            <YoutubePlayer
                height={350}
                width={350}
                videoId={"p_lNMqG9X7o"}
            />
            <Text style={{fontFamily: 'coiny-regular', fontSize: 20, color: '#fff', textAlign: 'center', margin: 10}}>Aquí tienes una breve ayuda para que puedas resolver el ejercicio</Text>
        </ImageBackground>
    );
}

const styles= StyleSheet.create({
    top_view:{
        width: '100%',
        flexDirection: 'row',
        height: 100,
        padding: 10
    },
    option: {
        height: 50,
        backgroundColor: '#669cc4',
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
    }
});