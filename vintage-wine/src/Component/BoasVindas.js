import React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import welcome from '../../images/image-welcome.png';
import xIcon from '../../assets/CloseBanner.svg';

export default function BoasVindas() {
    return (
        <View style={styles.container}>
           {/*  <ImageBackground
                source={require("../../images/image-welcome.png")}
                style={styles.image} 
            > */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>Vintage Wine</Text>
                    <Image source={xIcon} style={styles.xIcon} tintColor="black" />
                </View>

                <View style={styles.footer}>
                    <Text>Boas-Vindas à Vintage Wine</Text>
                    <Text>Explore nossos vinhos, onde cada garrafa conta uma historia.</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtButton}>Cadastre-se</Text>
                    </TouchableOpacity>
                    <Text >Seu link de página aqui</Text>
                </View>
           {/*  </ImageBackground> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerText: {
        fontSize: 20,
    },
    xIcon: {
        width: 20,
        height: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    footer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    button: {
        width: 342,
        backgroundColor: '#9A022B',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginVertical: 8,
    },
    txtButton: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});