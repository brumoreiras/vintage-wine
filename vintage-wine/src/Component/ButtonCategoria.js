import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';


export default function ButtonCategoria() {
    return (
        <TouchableOpacity style={styles.containerButtonCategoria}>
            <Image
                source={require('../../assets/wine_bar1.png')}
                style={styles.svgImage}
            />
            <Text style={styles.txtTitulo}>Vinho Tinto</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButtonCategoria:{ 
        width: 71,
        height: 60,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgImage: {
        width: 24,
        height: 24,
    },
    txtTitulo: {
        fontSize: 10
    }
})