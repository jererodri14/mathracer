import { ImageBackground, View, StyleSheet, Text, Image, Pressable } from "react-native";
import CustomButton from "./customButton";
import { useState } from 'react';

export default function Category({ navigation }) {

    const [levelsStatus, setLevelsStatus] = useState([
        { levelsStatus: 'D', difficulty: 'facil', levelNumber: 1 },
        { levelsStatus: 'D', difficulty: 'facil', levelNumber: 2 },
        { levelsStatus: 'B', difficulty: 'medio', levelNumber: 3 },
        { levelsStatus: 'B', difficulty: 'medio', levelNumber: 4 },
        { levelsStatus: 'B', difficulty: 'dificil', levelNumber: 5 },
        { levelStatus: 'B', difficulty: 'dificil', levelNumber: 6 }
    ]);


    return (
        <ImageBackground source={require('../assets/images/background.png')} style={{ width: '100%', height: '100%', alignItems: 'center', gap: 10 }}>
            <View style={styles.top_view}>
                <CustomButton iconSrc={require('../assets/icons/back-arrow.png')} viewStyle={styles.option} onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.title_view}>
                <Text style={styles.title}>Categorías</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <CustomButton title="Sumas" viewStyle={styles.category} titleStyle={styles.title} onPress={() => navigation.navigate('Level',
                        { levelsStatus: levelsStatus })} />
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
    title_view: {
        justifyContent: 'center',
    },
    top_view: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        padding: 10,
        justifyContent: 'space-between',
    },
    option: {
        height: 50,
        backgroundColor: '#669cc4',
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
    },
});