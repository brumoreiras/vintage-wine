import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, Button, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');


export default function DetalheProduto({ route }) {
    const { vinho } = route.params;
    const [count, setCount] = useState(1);
    const [valorAtualizado, setValorAtualizado] = useState(vinho.preco);
    const nacionalidade = vinho.nacionalidade;

    const decremento = () => {
        if (count > 1) {
            setCount(count - 1);
            setValorAtualizado((vinho.preco * (count - 1)));
        }
    }

    const incremento = () => {
        setCount(count + 1);
        setValorAtualizado((vinho.preco * (count + 1)));
    }

    console.log(valorAtualizado);
    if (!vinho) {
        return <Text>Algo deu errado!</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerImgProd}>
                    <Image
                        source={{ uri: vinho.imagem }}
                        style={styles.imgVinho}
                    />
                </View>
                <View style={styles.containerTituloVinho}>
                    <Text style={styles.txtTitulo}>{vinho.nome}</Text>
                    <Text style={styles.txtSubtitulo}>{nacionalidade}, {vinho.tipo}</Text>
                </View>

                <View style={styles.containerInfo}>
                    <Text style={styles.tituloDetalhe}>Descricao</Text>
                    <Text style={styles.subTituloDetalhe}>{vinho.descrição}</Text>

                    <Text style={styles.tituloDetalhe}>Ficha Técnica</Text>
                    <Text style={styles.subTituloDetalhe}>{vinho.ficha_tecnica}</Text>

                    <Text style={styles.tituloDetalhe}>Comentario Sommelier</Text>
                    <Text style={styles.subTituloDetalhe}>{vinho.comentario_sommelier}</Text>
                </View>
            </ScrollView>
            <View style={styles.containerFooter}>
                <View style={styles.containerValor}>
                    <Text style={styles.txtValor}>Valor</Text>
                    <Text style={styles.preco}>{`R$ ${valorAtualizado.toFixed(2)}`}</Text>
                </View>

                <View style={styles.containerAumentaItem}>
                    <Feather
                        name="plus-circle"
                        size={24} color="#D9D9D9"
                        onPress={incremento}

                    />
                    <View style={styles.qtdProduto}>
                        <Text style={styles.txtQtdProduto}>{count}</Text>
                    </View>
                    <Feather
                        name="minus-circle"
                        size={24}
                        color="#D9D9D9"
                        onPress={decremento}
                    />
                </View>
                <View style={styles.botao}>
                    <Button
                        title="Adicionar"
                        color='#FFF'
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF'
    },
    containerImgProd: {
        width: 343,
        height: 322,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgVinho: {
        width: 120,
        height: 300,
    },
    txtTitulo: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFAC0B',
        marginTop: 4
    },
    txtSubtitulo: {
        fontSize: 16,
        fontWeight: '300',
        color: '#989898',
    },
    preco: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFAC0B',
        textAlign: 'left',
        marginTop: 4
    },
    containerTituloVinho: {
        width: width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    containerInfo: {
        width: width * 0.9,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D9D9D9',
        padding: 16
    },
    tituloDetalhe: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
    subTituloDetalhe: {
        fontSize: 16,
        fontWeight: '400',
        color: '#4F4F4F',
        textAlign: 'left',
        marginBottom: 16
    },
    containerFooter: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        borderColor: '#D9D9D9',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderTopWidth: 1,
    },
    containerValor: {
        width: 'auto',
        height: 'auto',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        padding: 8,
        borderRadius: 8
    },
    txtValor: {
        fontSize: 16,
        color: '#4F4F4F',
        fontWeight: '700'
    },
    containerAumentaItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4,
        width: 'auto',
        height: 'auto',
        borderColor: '#D9D9D9',
        padding: 4,
    },
    circle: {
        borderRadius: 8,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        padding: 4
    },
    qtdProduto: {
        width: 'auto',
        height: 'auto',
        borderColor: '#D9D9D9',
        borderRadius: 4,
        borderWidth: 1,
        padding: 8
    },
    txtQtdProduto: {
        fontSize: 16,
        fontWeight: '700'
    },
    botao: {
        width: 150,
        fontSize: 12,
        fontWeight: '800',
        backgroundColor: '#FF6400',
        paddingHorizontal: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
    }

})