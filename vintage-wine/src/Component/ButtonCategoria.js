import React from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window')
const data = [
    {
        id: '1',
        image: require('../../assets/wine_bar.png'),
        titulo: 'Vinhos Tintos',
        icone: (
            <MaterialCommunityIcons name='glass-wine' size={32} color='#998F8F' />
        ),
        size: 32,
        color: '#998F8F'
    },
    {
        id: '2',
        image: require('../../assets/wine_bar.png'),
        titulo: 'Vinhos Rosé',
        icone: (
            <MaterialCommunityIcons name='glass-wine' size={32} color='#998F8F' />
        ),
    },
    {
        id: '3',
        image: require('../../assets/wine_bar.png'),
        titulo: 'Vinhos Branco',
        icone: (
            <MaterialCommunityIcons name='glass-wine' size={32} color='#998F8F' />
        ),

    },
    {
        id: '4',
        image: require('../../assets/wine_bar2.png'),
        titulo: 'Espumante',
        icone: (
            <MaterialCommunityIcons name='glass-wine' size={32} color='#998F8F' />
        ),
    },
    {
        id: '5',
        image: require('../../assets/liquor.png'),
        titulo: 'Todos os tipos',
        icone: (
            <FontAwesome5 name='wine-bottle' size={32} color='#998F8F' />
        ),
    },
    {
        id: '6',
        image: require('../../assets/monetization_on.png'),
        titulo: 'Por Preço',
        icone: (
            <MaterialIcons name="monetization-on" size={32} color='#998F8F' />
        ),
    },
    {
        id: '7',
        image: require('../../assets/travel_explore.png'),
        titulo: 'Por País',
        icone: (
            <FontAwesome name="globe" size={32} color='#998F8F' />
        ),
    },
    {
        id: '8',
        image: require('../../assets/award_star.png'),
        titulo: 'Mais Vendidos',
        icone: (
            <FontAwesome5 name='award' size={32} color='#998F8F' />


        ),
    },

];
export default function ButtonCategoria({ tela }) {
    if (tela === 'telaHome') {
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
                        <>
                            {item.icone}
                        </>
                        <Text style={styles.txtTitulo}>{item.titulo}</Text>
                        { }
                    </TouchableOpacity>

                )}
            />
        )
    } else {
        return (
            <FlatList
                data={data}
                keyExtractor={(item, index) => `row_${index}`}
                horizontal={false}
                numColumns={4}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.containerButtonCategoria}>
                        <>
                            {item.icone}
                        </>
                        <Text style={styles.txtTitulo}>{item.titulo}</Text>
                        { }
                    </TouchableOpacity>

                )}
                contentContainerStyle={{ rowGap: 8}}
                columnWrapperStyle={{ columnGap: 8 }}
            />
        )
    }


}

const styles = StyleSheet.create({
    containerButtonCategoria: {
        width: 80,
        height: 80,
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