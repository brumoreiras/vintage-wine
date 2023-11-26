import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default function VinhoPorPais({ nacionalidade, tiposVinho, navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerBandeira}>
                <Image
                    source={require('../../images/bandeira-pais/bandeira-argentina-categoria.png')}
                    style={styles.bandeiraImg}
                />
                <View style={styles.containerPais}>
                    <Text style={styles.txtPais}>Argentina</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerBandeira}>
                <Image
                    source={require('../../images/bandeira-pais/bandeira-brasil-categoria.png')}
                    style={styles.bandeiraImg}
                />
                <View style={styles.containerPais}>
                    <Text style={styles.txtPais}>Brasil</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerBandeira}>
                <Image
                    source={require('../../images/bandeira-pais/bandeira-chile-categoria.png')}
                    style={styles.bandeiraImg}
                />
                <View style={styles.containerPais}>
                    <Text style={styles.txtPais}>Chile</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerBandeira}>
                <Image
                    source={require('../../images/bandeira-pais/bandeira-uruguai-categoria.png')}
                    style={styles.bandeiraImg}
                />
                <View style={styles.containerPais}>
                    <Text style={styles.txtPais}>Uruguai</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBandeira: {
        margin: 8
    },
    bandeiraImg: {
        width: width * 0.9,
        height: 100,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    txtPais: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        backgroundColor: '#D9D9D9',
        padding: 8,

    }
})

