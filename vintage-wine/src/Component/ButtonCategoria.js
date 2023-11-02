import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')
const data = [
    {
        id: '1',
        image: require('../../assets/wine_bar.png'),
        titulo: 'Vinhos Tintos',     

    },
    {
        id: '2',
        image: require('../../assets/wine_bar.png'),
        titulo: 'Vinhos Rosé',
    },
    {
        id: '3',
        image: require('../../assets/wine_bar.png'),
        titulo: 'Vinhos Branco',
       
    },
    {
        id: '4',
        image: require('../../assets/wine_bar2.png'),
        titulo: 'Espumante',
    },
    {
        id: '5',
        image: require('../../assets/liquor.png'),
        titulo: 'Todos os tipos',
    },
    {
        id: '6',
        image: require('../../assets/monetization_on.png'),
        titulo: 'Por Preço',
    },
    {
        id: '7',
        image: require('../../assets/travel_explore.png'),
        titulo: 'Por País',
    },
    {
        id: '8',
        image: require('../../assets/award_star.png'),
        titulo: 'Mais Vendidos',
    },

];
export default function ButtonCategoria() {
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
                <TouchableOpacity style={styles.containerButtonCategoria}>
                    <Image
                        source={item.image}
                        style={styles.svgImage}
                    />
                    <Text style={styles.txtTitulo}>{item.titulo}</Text>
                </TouchableOpacity>

            )}
        />

    )
}

const styles = StyleSheet.create({
    containerButtonCategoria: {
        width: 80,
        height: 60,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4
    },
    svgImage: {
        width: 24,
        height: 24,
    },
    txtTitulo: {
        fontSize: 10
    }
})