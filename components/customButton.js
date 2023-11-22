import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CustomButton(props){
    return(
        <Pressable onPress={[props.onPress]}>
            <View style={[style.view, props.viewStyle]}>
                <Text style={[style.title, props.titleStyle]}>{props.title}</Text>
            </View>
        </Pressable>
    );
}
style = StyleSheet.create({
    view: {
        backgroundColor: 'lightblue',
        borderRadius: 15,
        padding: 10,
        elevation: 2
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});