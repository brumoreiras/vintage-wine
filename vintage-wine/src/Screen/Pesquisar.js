import React, { useState } from "react";
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import BannerProduto from "../Component/BannerProduto";
import data from '../../arquivosJson/banco-de-informacao.json';
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get('window');

export default function Pesquisar({ navigation }) {
    const [search, setSearch] = useState('');
    const [resultados, setResultados] = useState([]);
    const nacionalidades = data.vinhos;

    const realizarPesquisa = () => {
        const resultadosDaPesquisa = nacionalidades.flatMap((nacionalidade) =>
            nacionalidade.vinho.filter((vinho) =>
                vinho.nome.toLowerCase().includes(search.toLowerCase()) ||
                vinho.tipo.toLowerCase().includes(search.toLowerCase()) ||
                nacionalidade.nacionalidade.toLowerCase().includes(search.toLowerCase())
            )
        );

        setResultados(resultadosDaPesquisa);
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
        }}>

            <View style={styles.container}>
                <View style={styles.headerSearch}>
                    <TouchableOpacity style={styles.inputContainer}>
                        <TextInput
                            autoCorrect={false}
                            placeholder={'PESQUISAR'}
                            placeholderTextColor='#998F8F'
                            style={styles.textInput}
                            onChangeText={(value) => setSearch(value)}
                        />
                        <Feather
                            name="search"
                            size={24}
                            color="#998F8F"
                            onPress={realizarPesquisa}
                        />
                    </TouchableOpacity>

                    <Ionicons name="ios-filter-outline" size={28} color="#998F8F" />
                    <SimpleLineIcons
                        name="bag"
                        size={24}
                        color="#998F8F"
                        onPress={() => {
                            navigation.navigate('CarrinhoDeCompras');

                        }}
                    />

                </View>

                <View style={styles.teste}>
                    <FlatList
                        data={resultados}
                        numColumns={2}
                        keyExtractor={(vinho) => vinho.id.toString()}
                        renderItem={({ item: vinho }) => (
                            <BannerProduto
                                key={vinho.id}
                                vinho={vinho}
                                navigation={navigation}
                            />
                        )}
                        contentContainerStyle={{ padding: 18, rowGap: 16, alignItems: "center" }}
                        columnWrapperStyle={{ columnGap: 16 }}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    teste: {
        height: 'auto'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginTop: 16
    },
    headerSearch: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        rowGap: 8,
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        backgroundColor: '#F5F5F5'
    },
    inputContainer: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D9D9D9',
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    textInput: {
        fontSize: 12,
        fontWeight: '300',
        padding: 4,
        width: '90%'
    },
})