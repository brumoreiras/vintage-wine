import { StyleSheet, SafeAreaView, StatusBar, Text, View, ScrollView, FlatList, Dimensions } from 'react-native';
import BannerPromo from '../Component/BannerPromo';
import ButtonCategoria from '../Component/ButtonCategoria';
import BannerProduto from '../Component/BannerProduto';
import ButtonCategoriaPais from '../Component/ButtonCategoriaPais';
import Menu from '../Component/Menu';

const { width } = Dimensions.get('window')
export default function Home() {
    const data = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Vintage Wine</Text>
            <ScrollView >
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40,)}
                    snapToAlignment='start'
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    renderItem={({ item }) => (
                        <View style={{
                            width: width * 0.90 - 15,
                            marginHorizontal: 10,
                            borderRadius: 12,
                        }}>
                            <BannerPromo />
                        </View>

                    )}
                />
                <Text style={styles.txt}>Categorias</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40,)}
                    snapToAlignment='start'
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: 4 }} >
                          <ButtonCategoria />
                        </View>


                    )}
                />
                
                <Text style={styles.txt}>Em destaque</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40,)}
                    snapToAlignment='start'
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: 4 }} >
                            <BannerProduto />
                        </View>


                    )}
                />

                <Text style={styles.txt}>Escolha por país</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40,)}
                    snapToAlignment='start'
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: 4 }} >
                           <ButtonCategoriaPais />
                        </View>


                    )}
                />

                
            </ScrollView>
            <Menu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
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
        marginTop: 24,
        marginBottom: 16
    },
});
