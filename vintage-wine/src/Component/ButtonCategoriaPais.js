import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';


export default function ButtonCategoriaPais() {
    return (
        <TouchableOpacity style={styles.containerProduto}>
            <Image
                source={require('../../images/bandeira-pais/argentina.png')}
            />
            <View style={styles.descicaoCategoriaPais}>
                <Text style={styles.txtTitulo}>Argentina</Text>
                <Text style={styles.txtSubtitulo}>90 Opções</Text>
            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerProduto: {
        width: 91,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5', 
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    descicaoCategoriaPais:{
        padding: 4
    },
    txtTitulo: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFAC0B',
        marginTop: 4
    },
    txtSubtitulo: {
        fontSize: 8,
        fontWeight: '300',
        color: '#000',
        textAlign: 'center',
        marginTop: 4
    }
})