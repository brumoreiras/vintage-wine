import { StyleSheet, SafeAreaView, StatusBar, Text, View, ScrollView, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import BannerPromo from '../Component/BannerPromo';
import ButtonCategoria from '../Component/ButtonCategoria';
import BannerProduto from '../Component/BannerProduto';
import ButtonCategoriaPais from '../Component/ButtonCategoriaPais';
import Menu from '../Component/Menu';
import data from '../../arquivosJson/banco-de-informacao.json';


const { width } = Dimensions.get('window');

export default function Home() {
    const nacionalidades = data.vinhos;
    let todosOsVinhos = [];

    nacionalidades.forEach((nacionalidade) => {
        const vinhosNacionalidade = nacionalidade.vinho;
        todosOsVinhos = [...todosOsVinhos, ...vinhosNacionalidade];
    });

    const vinhosOrdenadosPorPreco = todosOsVinhos.sort((a, b) => a.preco - b.preco);
    const vinhosMaisBaratos = vinhosOrdenadosPorPreco.slice(0, 6);


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Vintage Wine</Text>
            <ScrollView >
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
