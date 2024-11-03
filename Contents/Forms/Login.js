import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
    const ss = StyleSheet.create({
        mainView: {
            backgroundColor: 'aqua', flex: 1,
            padding: 10,
            justifyContent: 'center',


        },
        viewInputs: {

        },
        txtInputs: {
            backgroundColor: 'white', margin: 10,
            fontSize: 20, borderRadius: 15,
        }
    });

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('red');

    var AllData = [
        { uName: "GPT", pass: "123" },
        { uName: "Faiz", pass: "000" },
        { uName: "Samandur Khan", pass: "1122" },
    ];

    const onPressButton = () => {
        if (!userName || password.length == 0) {
            setMessage('Please Enter All Values');
        }
        else {
            var ind = -1;
            var ans = AllData.filter(val => val.uName == userName && val.pass == password)
            // for (var i = 0; i < AllData.length; i++) {
            //     if (userName == AllData[i].uName && password == AllData[i].pass) {
            //         ind = i;
            //         break;
            //     }
            // }
            if (ans.length > 0) {
                setMessage('Correct Data');
                setMessageColor('green');
            }
            else {
                setMessage('In Correct Data');
                setMessageColor('red');
            }
        }
    }
    return (
        <View style={ss.mainView}>
            <View style={ss.viewInputs}>
                <TextInput
                    onChangeText={(val) => { setUserName(val) }}
                    placeholder="Enter User Name"
                    placeholderTextColor='purple'
                    style={ss.txtInputs}></TextInput>
                <TextInput
                    onChangeText={setPassword}
                    placeholder="Enter Password"
                    style={ss.txtInputs}></TextInput>
            </View>
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 35, color: messageColor,
                    }}>
                    {message}</Text>
            </View>
            <View style={{ alignSelf: 'center', width: '50%' }}>
                <Button
                    onPress={onPressButton}
                    title="Login"></Button>
            </View>
        </View>
    );
}
export default Login;