import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function CustomButton(props){
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const loadFontAsync = async () => {
          await Font.loadAsync({ 
            'coiny-regular': require('../assets/fonts/Coiny-Regular.ttf'),
          });
        };
    
        loadFontAsync();
    }, []);
    

    handlePress = () => {
        setIsPressed(true);
    }

    if(props.isOption){
        return(
            <Pressable onPress={handlePress}>
                <View style={[!isPressed?styles.view:props.isCorrect?styles.correct:styles.incorrect, props.viewStyle]}>
                    <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
                </View>
            </Pressable>
        )
    }else{
        return(
            <Pressable onPress={props.onPress}>
                <View style={[styles.view, props.viewStyle]}>
                    {props.iconSrc != null ? <Image source={props.iconSrc} style={{width: 50, height: 50}} />: null}
                    <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
                </View>
            </Pressable>
        );
    }  
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'coiny-regular',
    },
    correct: {
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    incorrect: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});