import { ImageBackground, View, StyleSheet, Text, Image, Pressable } from "react-native";
import CustomButton from "./customButton";

export default function Category({ navigation }) {
    return (
        <ImageBackground source={require('../assets/images/background.png')} style={{ width: '100%', height: '100%', alignItems: 'center', gap: 10 }}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <CustomButton title="Sumas" viewStyle={styles.category} titleStyle={styles.title} />
                    <CustomButton title="Restas" viewStyle={styles.category} titleStyle={styles.title} />
                </View>
                <View style={styles.row}>
                    <CustomButton title="División" viewStyle={styles.category} titleStyle={styles.title} />
                    <CustomButton title="Multip." viewStyle={styles.category} titleStyle={styles.title} />
                </View>
            </View>
        </ImageBackground>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    category: {
        backgroundColor: 'orange',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 110,
        padding: 10,
        margin: 5,
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'coiny-regular',
    },
});