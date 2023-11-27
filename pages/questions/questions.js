import { ImageBackground, View, Pressable, Image } from "react-native";
import { useState } from 'react';
import { useRoute } from "@react-navigation/native";
import data from "../../data/questions";
import CustomButton from "../../components/customButton";

export default function Questions({navigation}) {
    const route = useRoute();
    const {category, questions, levelNumber} = route.params;
    const getQuestions =()=>{
        const categoryFound = data.find(
            (categoria) => categoria.category.toLowerCase() === category.toLowerCase()
          );
        const levels = categoryFound.levels;
        const levelFound = levels.find(
          (nivel) => nivel.id == levelNumber
        );
        return levelFound.questions;
    }


    return (
        <ImageBackground source={require('../../assets/images/pista.jpeg')} style={{justifyContent: 'center',alignItems:'center', width: '100%', height: '100%'}}>
            <View style={styles.top_view}>
                <CustomButton iconSrc={require('../../assets/icons/back-arrow.png')} viewStyle={styles.option} onPress={() => navigation.pop(2)} />
            </View>
            { getQuestions().map((question, index) =>
            <CustomButton 
                key={question.id} title={"Pregunta " + question.id }  
                onPress={() => navigation.navigate('Question', {questionData: question, videoId: question.videoId})} 
                viewStyle={questions[index].estado=='A'?styles.actual_question:questions[index].estado=='C'?styles.done_question:styles.question}/>)}
        </ImageBackground>
    );
}

const styles = {
    actual_question: {
        height: 50,
        width: 200,
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
        backgroundColor: 'green',
        margin: 10,
    },
    done_question: {
        height: 50,
        width: 200,
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
        backgroundColor: 'orange',
        margin: 10,
    },
    question:{
        height: 50,
        width: 200,
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
        backgroundColor: '#669cc4',
        margin: 10,
    },
    top_view: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        padding: 10,
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
    },
}
