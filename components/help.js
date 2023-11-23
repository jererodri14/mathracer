import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import CustomButton from "./customButton";

export default function Help({navigation}){
    const route = useRoute();
    const {videoId, helpText} = route.params;
    return(
        <ImageBackground source={require('../assets/images/background.png')} style={{width: '100%', height: '100%', alignItems:'center', gap: 10}}>
            <View style={styles.top_view}>
                    <CustomButton iconSrc={require('../assets/icons/back-arrow.png')} viewStyle={ styles.option } onPress={()=> navigation.goBack()}/>
            </View>
            {videoId != undefined ?<YoutubePlayer height={350} width={350} videoId={videoId}/>: null}
            <Text style={{fontFamily: 'coiny-regular', fontSize: 20, color: '#fff', textAlign: 'center', margin: 10}}>{helpText}</Text>
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