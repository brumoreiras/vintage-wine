
import { StyleSheet, SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native';
import BannerPromo from '../Component/BannerPromo';
import ButtonCategoria from '../Component/ButtonCategoria';
import BannerProduto from '../Component/BannerProduto';
import ButtonCategoriaPais from '../Component/ButtonCategoriaPais';
import Menu from '../Component/Menu';


export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Vintage Wine</Text>
            <ScrollView>
                <BannerPromo />
                <Text style={styles.txt}>Categorias</Text>
                <ButtonCategoria />
                <Text style={styles.txt}>Em destaque</Text>
                <BannerProduto />
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
})