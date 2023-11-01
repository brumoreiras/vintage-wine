import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';


export default function BannerPromo() {
    return (
        <View>
            <Image
                source={require('../../assets/banner-01.png')}
                style={styles.ContainerBanner}
            />
            <View style={styles.txtContainerBanner}>
                <View>
                    <Text style={styles.txtTitulo}>Vinhos Tintos</Text>
                    <Text style={styles.txtSubtitulo}>Todas as marcas</Text>
                </View>

                <View style={styles.containerValor}>

                    <View style={styles.containerPrecoDesconto}>
                        <Text style={styles.contaitnerPrecoOriginal}>De R$ 199,00</Text>

                        <View style={styles.flexRow}>

                            <View style={styles.containerPrecoAlinhado}>
                                <Text style={styles.containerPrecoTxt}>Por:</Text>
                                <Text style={styles.containerPrecoTxt}>R$</Text>
                            </View>

                            <View>
                                <Text style={styles.containerPrecoVendaReal}>89</Text>
                            </View>
                            <View>
                                <Text style={styles.containerPrecoVendaMoeda}>,90</Text>
                            </View>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.buttoComprarPromo}>
                        <Text style={styles.buttoTxt}>Comprar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
    },
    ContainerBanner: {
        width: '100%',
        height: 234,
    },
    txtContainerBanner: {
        position: 'absolute',
        zIndex: 1,
        paddingTop: 46,
        paddingLeft: 16
    },
    txtTitulo: {
        fontSize: 24,
        fontWeight: '400',
        color: '#FFF',
        textAlign: 'right',
    },
    txtSubtitulo: {
        fontSize: 6,
        fontWeight: '400',
        color: '#FFF',
        textAlign: 'right',
    },
    containerValor: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        alignItems: 'flex-end',
    },
    contaitnerPrecoOriginal: {
        fontSize: 8,
        textAlign: 'left',
        color: '#FFAC0B',
        textDecorationLine: 'line-through'
    },
    containerPrecoDesconto: {
        flexDirection: 'column',

    },
    containerPrecoAlinhado: {
        justifyContent: 'flex-end',
        marginBottom: 8
    },
    containerPrecoTxt: {
        fontSize: 8,
        color: '#FFAC0B'
    },
    containerPrecoVendaReal: {
        fontSize: 32,
        fontWeight: '700',
        color: '#FFF'
    },
    containerPrecoVendaMoeda: {
        fontSize: 8,
        fontWeight: '700',
        color: '#FFF',
        marginTop: 8
    },
    buttoComprarPromo: {
        borderRadius: 8,
        backgroundColor: '#FF0039',
        width: 90,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttoTxt: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFF',
        textAlign: 'center',
    }

})