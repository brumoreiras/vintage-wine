import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import ButtonStyle from "../Component/ButtonStyle";

export default function SelecionarEnderecoEPagamento({ navigation }) {

    const calcularValorTotal = 0;

    return (
        <View style={StyleSheet.container}>
            <View style={{height: '100%'}}>
                <View style={[styles.containerEndPag, { marginTop: 32 }]}>
                    <Entypo name="location" size={24} color='#565656' />
                    <View style={{ width: '60%' }}>
                        <Text style={styles.txtEndPag}>
                            Endereço: Av. Eng. Eusébio Stevaux, 823 - Santo Amaro, São Paulo - SP, 04696-000

                        </Text>
                    </View>

                    {/* <TouchableOpacity
                    style={styles.containerAddPag}
                    onPress={() => navigation.navigate('SelecionarEndereco')}
                >
                    <Text style={styles.txtAdd}>Adicioar</Text>
                    <Ionicons name="arrow-forward-outline" size={24} color='#AA0120' />
                </TouchableOpacity> */}

                    <TouchableOpacity
                        style={styles.containerAddPag}
                        onPress={() => navigation.navigate('SelecionarEndereco')}
                    >
                        <Text style={styles.txtAdd}>Editar</Text>
                        <AntDesign name="edit" size={24} color='#AA0120' />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerEndPag}>
                    <MaterialCommunityIcons name="credit-card-plus-outline" size={24} color='#565656' />
                    <View style={{ width: '60%' }}>
                        <Text style={styles.txtEndPag}>XXXX XXXX XXXX 1234 </Text>
                    </View>

                    {/* <TouchableOpacity
                    style={styles.containerAddPag}
                    onPress={() => navigation.navigate('SelecionarFormaDePagamento')}
                >
                    <Text style={styles.txtAdd}>Adicionar</Text>
                    <Ionicons name="arrow-forward-outline" size={24} color='#AA0120' />
                </TouchableOpacity> */}

                    <TouchableOpacity
                        style={styles.containerAddPag}
                        onPress={() => navigation.navigate('SelecionarEndereco')}
                    >
                        <Text style={styles.txtAdd}>Editar</Text>
                        <AntDesign name="edit" size={24} color='#AA0120' />
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.containerFooter}>
              {/*   <View style={styles.containerValor}>
                    <Text style={styles.txtValor}>SubTotal</Text>
                    <Text style={styles.preco}>{`R$ ${calcularValorTotal.toFixed(2)}`}</Text>
                </View> */}
                <ButtonStyle title={'Finalizar'} onPress={() => navigation.navigate('CompraFinalizada')} />
            </View>
        </View >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: 2

    },
    containerEndPag: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderColor: '#D9D9D9',
        borderRadius: 8,
        borderWidth: 1,
        margin: 16

    },
    containerAddPag: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txtEndPag: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        borderColor: '#D9D9D9',

    },
    txtAdd: {
        fontSize: 16,
        fontWeight: '500',
        color: '#AA0120',
        marginRight: 4
    },
    containerFooter: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: '#D9D9D9',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderTopWidth: 1,
    },
    preco: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFAC0B',
        textAlign: 'left',
        marginTop: 4
    },
    txtValor: {
        fontSize: 12,
        color: '#B3B3B3',
        fontWeight: '700'
    },
})



