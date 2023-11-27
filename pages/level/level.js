import { ImageBackground } from "react-native";
import { useState } from "react";
import data from "../../data/questions";
import CustomButton from "../../components/customButton";

export default function Level({navigation}) {
    const [ isStarted, setIsStarted ] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const { levels } = data[0];
    const { questions } = levels[0];
    return (
        <ImageBackground source={require('../../assets/images/pista.jpeg')} style={{justifyContent: 'center',alignItems:'center', width: '100%', height: '100%'}}>
            { questions.map(question =><CustomButton key={question.id} title={"Pregunta " + question.id }  onPress={() => navigation.navigate('Question', {questionData: question})} viewStyle={styles.question}/>)}
        </ImageBackground>
    );
}

const styles = {
    question: {
        height: 50,
        width: 200,
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
        backgroundColor: '#2dd0ff',
        margin: 10,
    },
    done_question: {
        height: 50,
        width: 200,
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
        backgroundColor: '#ff0000',
        margin: 10,
    },
    
}
