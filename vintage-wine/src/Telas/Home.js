import { StyleSheet, SafeAreaView, StatusBar, Text, View, ScrollView, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import BannerPromo from '../Component/BannerPromo';
import ButtonCategoria from '../Component/ButtonCategoria';
import BannerProduto from '../Component/BannerProduto';
import ButtonCategoriaPais from '../Component/ButtonCategoriaPais';
import Menu from '../Component/Menu';
import data from '../../arquivosJson/banco-de-informacao.json';


const { width } = Dimensions.get('window')
export default function Home() {

    const vinhos = data.vinhos;


    // Classifique os vinhos com base no preço em ordem crescente
    const vinhosOrdenadosPorPreco = vinhos.sort((a, b) => a.preco - b.preco);

    // Filtrar para exibir apenas os vinhos mais baratos (por exemplo, os 5 primeiros)
    const vinhosMaisBaratos = vinhosOrdenadosPorPreco.slice(0, 5);


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Vintage Wine</Text>
            <ScrollView >
                <BannerPromo />


                <Text style={styles.txt}>Categorias</Text>
                <ButtonCategoria />


                <Text style={styles.txt}>Em destaque</Text>
                <View>
                    <Text style={styles.nome}>Aqui começa</Text>
                    <Text style={styles.tipo}>{vinhos.tipo}</Text>
                    <Text style={styles.descricao}>{vinhos.descrição}</Text>
                    <Text style={styles.fichaTecnica}>{vinhos.ficha_tecnica}</Text>
                    <Text style={styles.comentarioSommelier}>{vinhos.comentario_sommelier}</Text>
                    <Text style={styles.preco}>{`R$ ${vinhos.preco}`}</Text>
                </View>
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
