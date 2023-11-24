import React from "react";
import { View, Text, StyleSheet } from "react-native";




export default function Profile() {
    return (
        <View style={StyleSheet.container}>
            <Text>Perfil</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    txt: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 16
    },
    logo: {
        fontSize: 28,
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 16
    },
})