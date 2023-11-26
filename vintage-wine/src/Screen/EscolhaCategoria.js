import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, FlatList} from "react-native";
import BannerProduto from "../Component/BannerProduto";
import data from '../../arquivosJson/banco-de-informacao.json';
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get('window');

export default function EscolhaCategoria({ route, navigation }) {

    const [search, setSearch] = useState('');
    const [resultados, setResultados] = useState([]);
    const [tipoSelecionado, setTipoSelecionado] = useState(route.params?.tipoEscolhido || null);
    const nacionalidades = data.vinhos;

    const realizarPesquisa = (tipoEscolhido) => {
        
        const resultadosDaPesquisa = nacionalidades.flatMap((nacionalidade) =>
        nacionalidade.vinho.filter((vinho) =>
            vinho.nome.toLowerCase().includes(search.toLowerCase()) ||
            vinho.tipo.toLowerCase() === tipoEscolhido.toLowerCase() ||
            nacionalidade.nacionalidade.toLowerCase().includes(search.toLowerCase())
        )
    );

    let resultadosFiltrados = tipoEscolhido
        ? resultadosDaPesquisa.filter((vinho) => vinho.tipo === tipoEscolhido)
        : resultadosDaPesquisa;

    if (tipoEscolhido && tipoEscolhido.toLowerCase() === 'todos') {
        resultadosFiltrados = resultadosDaPesquisa.sort((a, b) => a.preco - b.preco);
    } else if (tipoEscolhido && tipoEscolhido.toLowerCase() === 'maior') {
        resultadosFiltrados = resultadosDaPesquisa.filter((vinho) => vinho.tipo.toLowerCase() !== tipoEscolhido.toLowerCase());
    }else if(tipoEscolhido && tipoEscolhido.toLowerCase() === 'preco'){
         resultadosFiltrados = resultadosDaPesquisa.sort((a, b) => a.preco - b.preco);
    }


    setResultados(resultadosFiltrados);
    };

    useEffect(() => {
        realizarPesquisa(tipoSelecionado);
    }, [tipoSelecionado, search]);

    const handleTipoPress = (tipo) => {
        setTipoSelecionado(tipo);
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
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