import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const MyBtn = ({ title, onPress, style, txtStyle }) => {
    return (
        <Pressable
            android_ripple={{ color: 'gray', foreground: true, borderless: false, }}
            onPress={onPress}>
            <View style={[myStyle.btn, style]}>
                <Text style={[myStyle.txtStyle, txtStyle]}>{title}</Text>
            </View>
        </Pressable>
    );
}




const myStyle = StyleSheet.create({
    btn: {
        backgroundColor: '#f0b27a',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    txtStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'purple',
        fontWeight: 'bold',
    }
});
