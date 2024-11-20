import React, { useState } from "react";
import { FlatList, Text, View, Alert } from "react-native";
import { Button } from "react-native-paper";
const TestCodes = () => {
    const [employee, setEmployee] = useState([
        { ID: 1, Name: "Ihtisham", Age: 20, City: "JamPur", },
        { ID: 2, Name: "Abdullah", Age: 21, City: "JamPur", },
        { ID: 3, Name: "Mughees", Age: 20, City: "RajanPur", },
        { ID: 4, Name: "Emaan", Age: 18, City: "Attock", },
        { ID: 5, Name: "Zainab", Age: 18, City: "Rawalpindi", },
    ]);

    const deleteEmployee = (id) => {
        var filteredEmployees = employee.filter(e => e.ID != id);
        setEmployee([...filteredEmployees]);
        console.log(filteredEmployees)
    }
    const showAllEmployees = ({ item }) => {
        return (
            <View style={{
                margin: 10, backgroundColor: 'pink',
                borderRadius: 12, borderWidth: 2,
            }}>

                <Text style={{ fontSize: 30, textAlign: 'center', color: 'red' }}>
                    {item.Name}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        flex: 1, borderWidth: 1, borderRadius: 10,
                        margin: 5,
                    }}>
                        <Text style={{
                            margin: 2, color: 'black',
                            fontWeight: 'bold', fontSize: 25
                        }}>CITY: {item.City}</Text>

                        <Text style={{
                            margin: 2, fontSize: 25,
                            fontWeight: 'bold', color: 'black'
                        }}>Age: {item.Age}</Text>
                    </View>
                    <View style={{
                        flex: 1, borderWidth: 1, borderRadius: 10,
                        margin: 5,
                    }}>
                        <Button
                            labelStyle={{ fontSize: 20, }}
                            style={{ borderRadius: 5, margin: 5, }}
                            mode="contained" onPress={() => { Alert.alert(item.ID + "") }}>Show ID</Button>
                        <Button
                            labelStyle={{ fontSize: 20, }}
                            style={{ borderRadius: 5, margin: 5, backgroundColor: 'red' }}
                            mode="contained"
                            onPress={() => { deleteEmployee(item.ID) }}>
                            Delete</Button>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <View style={{ flex: 1, padding: 10, }}>
            <Button
                mode="contained" onPress={() => { }}
                labelStyle={{ fontSize: 20, letterSpacing: 5, }}
                style={{ borderRadius: 4, margin: 10, }}
            > Reset Data </Button>
            <FlatList
                data={employee}
                renderItem={showAllEmployees}
            />
        </View>
    );
}
export default TestCodes;