import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import * as Progress from 'react-native-progress';
import { useSession } from '../session/sessionContext';
import { useRoute } from '@react-navigation/native';



export default function ProgressBar({ navigation }) {
    const [progress, setProgress] = useState(0);
    const route = useRoute();
    const { category, questions, levelNumber } = route.params;

    useEffect(() => {
        const updateProgress = () => {
            setProgress(prevProgress => {
                const newProgress = prevProgress + 0.40;

                if (newProgress >= 0.80) {
                    clearTimeout(progressTimeout);
                    navigateToQuestion();
                } else {
                    progressTimeout = setTimeout(updateProgress, 1000);
                }

                return newProgress;
            });
        };

        let progressTimeout = setTimeout(updateProgress, 1000);

        return () => clearTimeout(progressTimeout);
    }, [navigation]);


    const navigateToQuestion = () => {
        requestAnimationFrame(() => {
            navigation.navigate('Questions',{category, questions, levelNumber});
        });
    };

    return (
        <ImageBackground source={require('../assets/images/background.png')} style={{ width: '100%', height: '100%', alignItems: 'center', gap: 10 }}>
            <View style={styles.container}>
                <Image source={require('../assets/images/car.png')}></Image>
                <Progress.Bar progress={1} style={styles.progressBar} indeterminate={true} height={20} color='#36CE3D' unfilledColor='white' />
                <Text>Cargando: {(progress * 100).toFixed(0)}%</Text>
            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        width: 300,
        height: 30,
        color: "white",
        overlayColor: "white",
        borderColor: "black",
        borderWidth: 5,
        borderRadius: 20
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
