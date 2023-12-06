import React, { useState, useEffect } from 'react';
import { Alert, ScrollView } from 'react-native';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, Ionicons } from '@expo/vector-icons';
import ButtonStyle from '../Component/ButtonStyle';


const { width, height } = Dimensions.get('window');
export default CarrinhoDeCompras = ({ navigation }) => {
    const [itensNoCarrinho, setItensNoCarrinho] = useState([]);

    useEffect(() => {
        const loadItensDoAsyncStorage = async () => {
            try {
                const carrinhoSalvo = await AsyncStorage.getItem('carrinho');
                if (carrinhoSalvo) {
                    setItensNoCarrinho(JSON.parse(carrinhoSalvo));
                }
            } catch (error) {
                console.error('Erro ao carregar itens do AsyncStorage', error);
            }
        };

        loadItensDoAsyncStorage();
    }, []);

    const adicionarAoCarrinho = async (itemNoCarrinho) => {
        try {
            const carrinhoSalvo = await AsyncStorage.getItem('carrinho');
            const carrinho = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];

            const indexVinhoExistente = carrinho.findIndex(
                (item) =>
                    item.id === itemNoCarrinho.id &&
                    item.nome === itemNoCarrinho.nome &&
                    item.nacionalidade === itemNoCarrinho.nacionalidade
            );

            if (indexVinhoExistente !== -1) {
                carrinho[indexVinhoExistente].quantidade += itemNoCarrinho.quantidade;
                carrinho[indexVinhoExistente].precoTotal += itemNoCarrinho.precoTotal;
            } else {
                carrinho.push(itemNoCarrinho);
            }

            setItensNoCarrinho(carrinho);
            await AsyncStorage.setItem('carrinho', JSON.stringify(carrinho));
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
        }
    };

    const removerItemDoCarrinho = async (index) => {
        try {
            const updatedItens = [...itensNoCarrinho];
            updatedItens.splice(index, 1);
            setItensNoCarrinho(updatedItens);

            await AsyncStorage.setItem('carrinho', JSON.stringify(updatedItens));
        } catch (error) {
            console.error('Erro ao remover item do carrinho:', error);
        }
    };

    const decremento = (index) => {
        const updatedItens = [...itensNoCarrinho];
        const item = updatedItens[index];

        if (item && item.quantidade > 1) {
            item.quantidade -= 1;
            item.precoTotal = item.preco * item.quantidade;
            setItensNoCarrinho(updatedItens);
        }
    };

    const incremento = (index) => {
        const updatedItens = [...itensNoCarrinho];
        const item = updatedItens[index];

        if (item) {
            item.quantidade += 1;
            item.precoTotal = item.preco * item.quantidade;
            setItensNoCarrinho(updatedItens);
        }
    };

    const calcularValorTotal = () => {
        return itensNoCarrinho.reduce((total, item) => total + item.precoTotal, 0);
    };

    return (
        <View style={styles.container}>

            <ScrollView>
                {itensNoCarrinho.length > 0 ? (
                    <View style={{ marginVertical: 16 }}>
                        {itensNoCarrinho.map((item, index) => (
                            <View style={styles.containerItemCarrinho} key={index}>
                                <Image
                                    source={{ uri: item.imagem }}
                                    style={styles.imgVinho}
                                />
                                <View style={styles.txtProduto}>
                                    <View>
                                        <Text style={styles.titulo}>{item.nome}</Text>
                                        <Text style={styles.subTitulo}>{item.nacionalidade}</Text>
                                    </View>

                                    <Text style={{ fontSize: 16, fontWeight: '600' }}>R${item.precoTotal.toFixed(2)}</Text>
                                </View>

                                <View style={styles.containerEdit}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Ionicons
                                            name="close"
                                            size={24}
                                            color="#B3B3B3"
                                            onPress={() => removerItemDoCarrinho()}
                                        />

                                    </View>

                                    <View style={styles.containerAumentaItem}>
                                        <Feather
                                            name="plus-circle"
                                            size={24} color="#D9D9D9"
                                            onPress={() => incremento(index, item)}

                                        />
                                        <View style={styles.qtdProduto}>
                                            <Text style={styles.txtQtdProduto}>{item.quantidade}</Text>
                                        </View>
                                        <Feather
                                            name="minus-circle"
                                            size={24}
                                            color="#D9D9D9"
                                            onPress={() => decremento(index, item)}
                                        />
                                    </View>
                                </View>
                            </View>

                        ))}
                    </View>
                ) : (
                    <Text>Nenhum item no carrinho.</Text>
                )}
            </ScrollView>

            <View style={styles.containerFooter}>
                <View style={styles.containerValor}>
                    <Text style={styles.txtValor}>SubTotal</Text>
                    <Text style={styles.preco}>{`R$ ${calcularValorTotal().toFixed(2)}`}</Text>
                </View>
                <ButtonStyle title={'Prosseguir'} onPress={() => navigation.navigate('SelecionarEnderecoEPagamento', { precoTotal: calcularValorTotal() })} />
            </View>


        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    txtProduto: {
        justifyContent: 'space-between',
        padding: 16
    },
    titulo: {
        fontSize: 16,
        fontWeight: '500',
    },
    subTitulo: {
        fontSize: 10,
        fontWeight: '300'
    },
    imgVinho: {
        width: 50,
        height: 120,
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
        marginTop: 8
    },
    containerItemCarrinho: {
        width: width * 0.9,
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#B3B3B3',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 16
    },
    containerEdit: {
        justifyContent: 'space-between'
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
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: '#D9D9D9',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderTopWidth: 1,
    },
    preco: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFAC0B',
        textAlign: 'left',
        marginTop: 4
    },
    txtValor: {
        fontSize: 12,
        color: '#B3B3B3',
        fontWeight: '700'
    },
});
