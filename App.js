import React, { useState } from "react";
import { View } from "react-native";
import TestCodes from "./Contents/Forms/TestCodes";
import DBConnectivity from "./Contents/Forms/DBConnectivity";
import ReactNativeControls from "./Contents/Forms/ReactNativeControls";

const App = () => {

    var ipAdd = '192.168.218.78';
    global.url = `http://${ipAdd}/TestingAPI/api/book/`;
    global.imgURL = `http://${ipAdd}/TestingAPI/Images/`;
    return (
        <View style={{ flex: 1 }}>
            <ReactNativeControls />
        </View>
    );
}
export default App;