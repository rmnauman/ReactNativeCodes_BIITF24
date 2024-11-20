import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";


const QuizProgram = () => {

    const [data, setData] = useState([
        { question: "Question: 2+2=?", op1: "3", op2: 5, op3: 6, op4: 4, correct: 3 },
        { question: "Question: 2x5=?", op1: "15", op2: 5, op3: 10, op4: 2, correct: 2 },
        { question: "Question: 3*21=?", op1: "3", op2: 63, op3: 66, op4: 45, correct: 1 },
        { question: "Question: 10+10=?", op1: "20", op2: 21, op3: 30, op4: 33, correct: 0 },
    ])
    const [quesCount, setQuesCount] = useState(0)
    const [ansCount, setAnswerCount] = useState(0)
    const [rbChecked, setRBChecked] = useState(0)
    const [totalQues, setTotalQues] = useState(0)
    const [op1, setop1] = useState()
    const [op2, setop2] = useState()
    const [op3, setop3] = useState()
    const [op4, setop4] = useState()
    const [summary, setSummary] = useState(false)

    const btnNext = () => {
        setSummary(false)
        console.log(quesCount + '\t' + data.length)
        if (quesCount == (data.length - 1)) {
            setQuesCount(0)
            return;
        }
        if (rbChecked == data[quesCount].correct) {
            setAnswerCount(ansCount + 1)
        }
        setQuesCount(quesCount + 1)
        setTotalQues(totalQues + 1)
    }
    const btnFinish = () => {
        setQuesCount(0)
        setSummary(true)
    }
    return (
        <View style={{ flex: 1, }}>
            <View style={ss.quiz}>
                <Text style={ss.text}>QUIZ</Text>
            </View>
            <View style={ss.ques}>
                <Text style={[ss.text, { fontSize: 30, }]}>{data[quesCount].question}</Text>
            </View>
            <View style={ss.options}>
                <Text style={ss.text}>Options:</Text>
                <View style={ss.optView}>
                    <RadioButton
                        status={rbChecked == 0 ? 'checked' : 'unchecked'}
                        onPress={() => { setRBChecked(0); }}
                    />
                    <Text style={{ fontSize: 25 }}>{data[quesCount].op1}</Text>
                </View>
                <View style={ss.optView}>
                    <RadioButton
                        status={rbChecked == 1 ? 'checked' : 'unchecked'}
                        onPress={() => { setRBChecked(1); }}
                    />
                    <Text style={{ fontSize: 25 }}>{data[quesCount].op2}</Text>
                </View>
                <View style={ss.optView}>
                    <RadioButton
                        status={rbChecked == 2 ? 'checked' : 'unchecked'}
                        onPress={() => { setRBChecked(2); }}
                    />
                    <Text style={{ fontSize: 25 }}>{data[quesCount].op3}</Text>
                </View>
                <View style={ss.optView}>
                    <RadioButton
                        status={rbChecked == 3 ? 'checked' : 'unchecked'}
                        onPress={() => { setRBChecked(3); }}
                    />
                    <Text style={{ fontSize: 25 }}>{data[quesCount].op4}</Text>
                </View>
            </View>
            <View style={ss.btnView}>
                <Button
                    mode="contained"
                    textColor="yellow"
                    rippleColor="white"
                    onPress={btnNext}
                    labelStyle={{ fontSize: 20, }}
                >Next Question</Button>
            </View>
            <View style={ss.btnView}>
                <Button
                    mode="contained"
                    textColor="white"
                    rippleColor="yellow"
                    onPress={btnFinish}
                    labelStyle={{ fontSize: 20, }}
                >Finish</Button>
            </View>
            <View style={ss.summary}>
                <Text style={ss.text}>Summary</Text>
                {summary &&
                    <View>
                        <Text>Total Questions:{totalQues + 1}</Text>
                        <Text>Total Correct Answers:{ansCount}</Text>
                        <Text>Total Score:{ansCount * 10}</Text>
                    </View>
                }
            </View>
        </View >
    );
}
const ss = StyleSheet.create({
    quiz: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    ques: {
        margin: 10,
        backgroundColor: 'lightgray',
        padding: 10,
    },
    options: {
        margin: 10,
        backgroundColor: 'lightblue',
        padding: 10,

    },
    summary: {
        margin: 10,
        backgroundColor: 'lightgreen',
        padding: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "black",
    },
    btnView: {
        margin: 10,
        width: '80%',
        alignSelf: 'center',
    },
    optView: {
        flexDirection: 'row',
    }
});
export default QuizProgram;