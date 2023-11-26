import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';


export default function BannerProduto({ vinho, navigation }) {
    if (!vinho) {
        return <Text>Algo deu errado!</Text>
    }
    return (
        <TouchableOpacity
            style={styles.containerProduto}
            onPress={() => navigation.navigate('DetalheProduto', { vinho })}
        >
            <Image
                source={{ uri: vinho.imagem }}
                style={styles.imgVinho}
            />
            <Text style={styles.txtTitulo}>{vinho.nome}</Text>
            <View>
                <Text
                    style={styles.txtSubtitulo}
                >
                    {`${vinho.tipo} - ${vinho.ficha_tecnica} `}
                </Text>
                {
                    vinho.preco !== undefined ? (
                        <Text style={styles.preco}>{`R$ ${vinho.preco}`}</Text>
                    ) : null
                }
            </View>
        </TouchableOpacity>
    );
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
        padding: 8,
        backgroundColor: '#FFF'
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
    txtSubtitulo: {
        fontSize: 8,
        fontWeight: '300',
        color: '#000',
        textAlign: 'left',
        marginTop: 4
    },
    preco: {
        fontSize: 12,
        fontWeight: '700',
        color: '#AA0120',
        textAlign: 'left',
        marginTop: 4
    }
})