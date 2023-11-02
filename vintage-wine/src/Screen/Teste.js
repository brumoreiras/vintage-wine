import { StyleSheet, SafeAreaView, StatusBar, Text, View, ScrollView, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import BannerPromo from '../Component/BannerPromo';
import ButtonCategoria from '../Component/ButtonCategoria';
import BannerProduto from '../Component/BannerProduto';
import ButtonCategoriaPais from '../Component/ButtonCategoriaPais';
import Menu from '../Component/Menu';
import data from '../../arquivosJson/banco-de-informacao.json';

const { width } = Dimensions.get('window')

export default function Home() {
    // Acessar todas as nacionalidades
    const nacionalidades = data.nacionalidades;

    // Uma lista para armazenar todos os vinhos
    let todosOsVinhos = [];

    // Iterar pelas nacionalidades
    nacionalidades.forEach((nacionalidade) => {
        // Acessar a lista de vinhos da nacionalidade atual
        const vinhosNacionalidade = nacionalidade.vinho;

        // Adicionar os vinhos da nacionalidade atual à lista de todos os vinhos
        todosOsVinhos = [...todosOsVinhos, ...vinhosNacionalidade];
    });

    // Classificar todos os vinhos com base no preço em ordem crescente
    const vinhosOrdenadosPorPreco = todosOsVinhos.sort((a, b) => a.preco - b.preco);

    // Filtrar para exibir apenas os 5 vinhos mais baratos
    const vinhosMaisBaratos = vinhosOrdenadosPorPreco.slice(0, 5);

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Vintage Wine</Text>
            <ScrollView>
                <BannerPromo />
                <Text style={styles.txt}>Categorias</Text>
                <ButtonCategoria />
                <Text style={styles.txt}>Em destaque</Text>
                <FlatList
                    data={vinhosMaisBaratos}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: 4 }}>
                            <BannerProduto vinho={item} />
                        </View>
                    )}
                />
                <Text style={styles.txt}>Escolha por país</Text>
                <ButtonCategoriaPais />
            </ScrollView>
            <Menu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8
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
        marginTop: 32,
        marginBottom: 16
    },
});
