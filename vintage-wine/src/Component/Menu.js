import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';


export default function Menu() {
    return (
        <TouchableOpacity style={styles.containerMenu}>
            <View style={styles.iconesMenu}>
                <Image
                    source={require('../../assets/home.png')}
                    style={styles.icone}
                />
                <Text style={styles.txtMenu}>Home</Text>
            </View>
            <View style={styles.iconesMenu}>
                <Image
                    source={require('../../assets/categorias.png')}
                    style={styles.icone}
                />
                <Text style={styles.txtMenu}>Argentina</Text>
            </View>
            <View style={styles.iconesMenu}>
                <Image
                    source={require('../../assets/search.png')}
                    style={styles.icone}
                />
                <Text style={styles.txtMenu}>Argentina</Text>
            </View>
            <View style={styles.iconesMenu}>
                <Image
                    source={require('../../assets/account_circle.png')}
                    style={styles.icone}
                />
                <Text style={styles.txtMenu}>Argentina</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerMenu:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    iconesMenu:{
        width: 87,
        padding:8,
        alignItems: 'center'
    },
    icone:{
        width: 16,
        height: 16
    },
    txtMenu:{
        fontSize: 8,
        fontWeight: '400',
        color: '#998F8F'
    }
})