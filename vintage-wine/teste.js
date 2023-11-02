import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, FlatList, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const data = [
    {
        id: '1',
        image: require('../../images/banner-promo/banner-01.png'),
        titulo: 'Vinhos Tintos',
        subtitulo: 'Todas as marcas',
        valorOriginal: 'De R$ 199,00',
        por: 'Por',
        reais: 'R$',
        valorNota: '89',
        valorMoeda: ',90',
    },
    {
        id: '2',
        image: require('../../images/banner-promo/banner-02.png'),
        titulo: 'Vinhos Rosé',
        subtitulo: 'Todas as marcas',
        valorOriginal: 'De R$ 120,00',
        por: 'Por',
        reais: 'R$',
        valorNota: '79',
        valorMoeda: ',90',
    },
    {
        id: '3',
        image: require('../../images/banner-promo/banner-03.png'),
        titulo: 'Vinhos Branco',
        subtitulo: 'Todas as marcas',
        valorOriginal: 'De R$ 149,00',
        por: 'Por',
        reais: 'R$',
        valorNota: '59',
        valorMoeda: ',90',
    },
    {
        id: '4',
        image: require('../../images/banner-promo/banner-04.png'),
        titulo: 'Conheça as vantagens de comprar nossos Kits',
        subtitulo: 'São as melhores seleções de vinhos, escolhidos especialmente para você',
    },
];

export default function BannerPromo() {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
            snapToAlignment='start'
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            renderItem={({ item, index }) => {
                const lastItem = index === data.length - 1;
                const txtColor = index === 1 || index === 2 ? styles.textoItens2e3 : styles.textoPadrao;
                if (lastItem) {
                    return (
                        <ImageBackground
                            source={item.image}
                            style={styles.ContainerBanner}
                        >
                            <View style={styles.lastItemTxtContainerBanner}>
                                <View style={styles.lastItemContainerTexto}>
                                    <Text style={styles.lastItemTxtTitulo}>{item.titulo}</Text>
                                    <Text style={styles.lastItemTxtSubtitulo}>{item.subtitulo}</Text>
                                    <TouchableOpacity style={styles.buttoComprarPromo}>
                                        <Text style={styles.buttoTxt}>Comprar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    )
                }

                return (
                    <ImageBackground
                    source={item.image}
                    style={styles.ContainerBanner}
                >
                    <View style={styles.txtContainerBanner}>
                        <View>
                            <Text style={[styles.txtTitulo, textColor]}>{item.titulo}</Text>
                            <Text style={[styles.txtSubtitulo, textColor]}>{item.subtitulo}</Text>
                        </View>

                        <View style={styles.containerValor}>
                            <View style={styles.containerPrecoDesconto}>
                                <Text style={styles.contaitnerPrecoOriginal}>{item.valorOriginal}</Text>
                                <View style={styles.flexRow}>
                                    <View style={styles.containerPrecoAlinhado}>
                                        <Text style={styles.containerPrecoTxt}>{item.por}</Text>
                                        <Text style={styles.containerPrecoTxt}>{item.reais}</Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.containerPrecoVendaReal, textColor]}>{item.valorNota}</Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.containerPrecoVendaMoeda, textColor]}>{item.valorMoeda}</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.buttoComprarPromo}>
                                <Text style={styles.buttoTxt}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
    },
    ContainerBanner: {
        /* width: '100%', */
        height: 234,
        width: width * 0.90 - 15,
        marginHorizontal: 10,
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
    },
    lastItemTxtContainerBanner: {
        position: 'absolute',
        zIndex: 1,
        paddingTop: 16,
        paddingLeft: 16
    },
    lastItemContainerTexto: {
        width: '80%'
    },
    lastItemTxtTitulo: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    }
})
