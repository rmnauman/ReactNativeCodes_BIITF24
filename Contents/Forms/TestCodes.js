import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const TestCodes = () => {

    const [error, setError] = useState('')
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')
    const [errorColor, seterrorColor] = useState('red')

    const onPressButtonHandler = () => {
        if (!user || !pass) {
            setError('Enter All Fields');
        }
        else {
            if (user == 'Ali' && pass == '123') {
                seterrorColor('green')
                setError('Login Successful:')
            }
            else {
                setError('Invalid User Name or Password')
            }
        }
    }
    const myStyle = StyleSheet.create(
        {
            mainContainer: {
                flex: 1,
                padding: 5,
                backgroundColor: 'lightblue',
                justifyContent: 'center',
            },
            textInput: {
                backgroundColor: 'white',
                borderRadius: 10,
                margin: 10,
                fontSize: 20,
            },
            btn: {
                margin: 10,
                width: '50%',
                alignSelf: 'center'
            },
            InvalidUserPass: {
                textAlign: 'center',
                fontSize: 20,
                marginTop: -5,
                color: errorColor,
            },
        }
    );

    return (
        <View style={myStyle.mainContainer}>
            <View>
                <View id='textField'>
                    <View>
                        <TextInput
                            onChangeText={setUser}
                            value={user} placeholder="UserName" style={myStyle.textInput}></TextInput>

                        <TextInput
                            onChangeText={setPass}
                            value={pass} secureTextEntry={true} placeholder="Password" style={myStyle.textInput}></TextInput>
                    </View>

                    <View>
                        <Text style={myStyle.InvalidUserPass}>{error}</Text>
                    </View>

                    <View style={myStyle.btn}>
                        <Button title='Login' onPress={onPressButtonHandler} />
                    </View>
                </View>
            </View>
        </View>
    );
}


export default TestCodes;