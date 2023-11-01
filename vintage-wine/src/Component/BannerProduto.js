import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';


export default function BannerProduto() {
    return (
        <TouchableOpacity style={styles.containerProduto}>
            <Image
                source={require('../../images/vinhos-brasil/cabernet_sauvignon.png')}
                style={styles.imgVinho}
            />
            <Text style={styles.txtTitulo}>Cabernet Sauvignon</Text>
            <View>
                <Text style={styles.txtSubtitulo}>Vinho Fino Tinto Seco 750ml
                    Rio Grande do Sul - Brasil</Text>
                <Text style={styles.preco}>R$ 99,90</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerProduto: {
        width: 162,
        height: 'auto',
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    imgVinho: {
        width: 42,
        height: 179,
    },
    txtTitulo: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFAC0B',
        marginTop: 4
    },
    txtSubtitulo:{
        fontSize: 8,
        fontWeight: '300',
        color: '#000',
        textAlign: 'left',
        marginTop: 4
    },
    preco:{
        fontSize: 12,
        fontWeight: '700',       
        color:'#AA0120',
        textAlign: 'left',
        marginTop: 4
    }
})