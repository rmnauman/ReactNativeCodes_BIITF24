import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TestCodes = () => {

    return (
        <View style={myStyle.containerText}>
            <Text style={myStyle.myText}>Pakistan Zindabad</Text>
        </View>
    );
}

const myStyle = StyleSheet.create(
    {
        containerText: {
            flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
            borderWidth: 1,
        },
        myText: {
            backgroundColor: 'pink',
            width: '50%',
            textAlign: 'center',

        },
    }
);
export default TestCodes;