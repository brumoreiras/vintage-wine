import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import BannerPromo from "../Component/BannerPromo";
import ButtonCategoria from "../Component/ButtonCategoria";

const { width } = Dimensions.get('window');


export default function Categorias() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.containerPromocao}>
                    <Text style={styles.txtContainerPromocao}>Confira nossas promoções da semana</Text>
                    <BannerPromo />
                </View>
                <View style={styles.containerTiposDeCategorias}>
                    <Text style={styles.txtContainerTiposDeCategorias}>Vinhos</Text>
                    <ButtonCategoria tela={'telaDeCategoria'} />
                </View>
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF'
    },
    containerPromocao: {
        width: width,
        height: 'auto',
        paddingVertical: 10
    },
    txtContainerPromocao: {
        padding: 16,
        fontSize: 18,
        fontWeight: '700'
    },
    containerTiposDeCategorias: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        width: width
    },
    txtContainerTiposDeCategorias: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 16
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