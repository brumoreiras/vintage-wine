import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function CarrinhoDeCompras({ route }) {

    const [itensNoCarrinho, setItensNoCarrinho] = useState([]);

    useEffect(() => {
        const { itemNoCarrinho } = route.params || {};
        if (itemNoCarrinho) {
            setItensNoCarrinho((prevItens) => [...prevItens, itemNoCarrinho]);
        }
    }, [route.params]);

    console.log('itens do carrinho:::: ', itensNoCarrinho)

    return (
        <View style={styles.container}>
            <Text>Meu Componente React Native</Text>
            <Text>Este é um exemplo de um componente React Native.</Text>

            {itensNoCarrinho.length > 0 ? (
                <View>
                    <Text>Itens no Carrinho:</Text>
                    {itensNoCarrinho.map((item, index) => (
                        <View key={index}>
                            <Text>Nome: {item.nome}</Text>
                            <Text>Nacionalidade: {item.nacionalidade}</Text>
                            <Text>Quantidade: {item.quantidade}</Text>
                            <Text>Preço Total: R$ {item.precoTotal.toFixed(2)}</Text>
                            <Text>--------------------------</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text>Nenhum item no carrinho.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
