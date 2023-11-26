import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')
const data = [
    {
        id: '1',
        image: require('../../images/bandeira-pais/argentina.png'),
        titulo: 'Argentina',
        subtitulo: '90 Opções'
    },
    {
        id: '2',
        image: require('../../images/bandeira-pais/brasil.png'),
        titulo: 'Argentina',
        subtitulo: '90 Opções'
    },
    {
        id: '3',
        image: require('../../images/bandeira-pais/chile.png'),
        titulo: 'Argentina',
        subtitulo: '90 Opções'
    },
    {
        id: '4',
        image: require('../../images/bandeira-pais/uruguai.png'),
        titulo: 'Argentina',
        subtitulo: '90 Opções'
    },

];


export default function ButtonCategoriaPais({ navigation }) {
    return (
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

                <TouchableOpacity style={styles.containerProduto} onPress={() => navigation.navigate('VinhoPorPais')}>
                    <Image
                        source={item.image}
                        style={styles.imgCategoria}
                    />
                    <View style={styles.descicaoCategoriaPais}>
                        <Text style={styles.txtTitulo}>{item.titulo}</Text>
                        <Text style={styles.txtSubtitulo}>{item.subtitulo}s</Text>
                    </View>


                </TouchableOpacity>


            )}
        />

    )
}

const styles = StyleSheet.create({
    containerProduto: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginHorizontal: 8,
        marginBottom: 16
    },
    imgCategoria: {
        width: width * 0.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    descicaoCategoriaPais: {
        padding: 4
    },
    txtTitulo: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFAC0B',
        marginTop: 4
    },
    txtSubtitulo: {
        fontSize: 8,
        fontWeight: '300',
        color: '#000',
        textAlign: 'center',
        marginTop: 4
    }
})