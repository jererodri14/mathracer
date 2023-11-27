import { ImageBackground, View, StyleSheet, Text, Image, Pressable } from "react-native";
import CustomButton from "./customButton";
import { useRoute } from "@react-navigation/native";

export default function Level({ navigation }) {

    const route = useRoute();
    const { levelsStatus } = route.params;
    console.log('prueba', levelsStatus);


    return (
        <ImageBackground source={require('../assets/images/background.png')} style={{ width: '100%', height: '100%', alignItems: 'center', gap: 10 }}>
            <View style={styles.top_view}>
                <CustomButton iconSrc={require('../assets/icons/back-arrow.png')} viewStyle={styles.option} onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.container}>
                {[...Array(Math.ceil(levelsStatus.length / 2))].map((_, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {levelsStatus.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, colIndex) => (
                            <CustomButton
                                key={rowIndex * 2 + colIndex}
                                viewStyle={{ ...styles.level, backgroundColor: getColor(item.difficulty) }}
                                titleStyle={styles.title}
                                title={item.levelsStatus === "D" ? item.levelNumber : ''}
                                onPress={() => navigation.navigate('ProgressBar')}
                                iconSrc={item.levelsStatus !== "D" ? require('../assets/icons/padlock.png') : null}
                            />
                        ))}
                    </View>
                ))}
            </View>
        </ImageBackground>
    );
}

const getColor = (difficulty) => {
    const colors = {
        'facil': '#36CE3D',
        'medio': '#FFF618',
        'dificil': '#FF0C0C'
    };

    return colors[difficulty];
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
    level: {
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