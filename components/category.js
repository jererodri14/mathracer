import { ImageBackground, View, StyleSheet, Text, Image, Pressable } from "react-native";
import CustomButton from "./customButton";
import { getUsersLevels } from '../enpoints/category';
import { useEffect, useState } from "react";

export default function Category({ navigation }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const levelData = await getUsersLevels('heizel');
                setData(levelData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);


    const handleButtonPress = (categoryName) => {
        try {
            const foundCategory = data.find(category => category.nombre.toLowerCase() === categoryName.toLowerCase());

            if (!foundCategory) {
                console.log('data', data);
                return [];
            }

            const transformedData = foundCategory.niveles.map(nivel => ({
                levelsStatus: nivel.estado,
                difficulty: nivel.dificultad,
                levelNumber: nivel.numero
            }));

            navigation.navigate('Level', { levelsStatus: transformedData });

        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };

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
                    <CustomButton title="Sumas" viewStyle={styles.category} titleStyle={styles.title} onPress={() => handleButtonPress('suma')} />
                    <CustomButton title="Restas" viewStyle={styles.category} titleStyle={styles.title} onPress={() => handleButtonPress('resta')} />
                </View>
                <View style={styles.row}>
                    <CustomButton title="División" viewStyle={styles.category} titleStyle={styles.title} onPress={() => handleButtonPress('division')} />
                    <CustomButton title="Multip." viewStyle={styles.category} titleStyle={styles.title} onPress={() => handleButtonPress('multiplicacion')} />
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
