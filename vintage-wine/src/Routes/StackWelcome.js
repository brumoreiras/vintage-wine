import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SimpleLineIcons } from '@expo/vector-icons';


import BoasVindas from '../Screen/BoasVindas';
import TabMenu from './TabMenu'
import SingIn from '../Screen/SingIn';
import SingUp from '../Screen/SingUp';
import DetalheProduto from '../Screen/DetalheProduto';
import CarrinhoDeCompras from '../Screen/CarrinhoDeCompras';
import SelecionarEnderecoEPagamento from '../Screen/SelecionarEnderecoEPagamento';
import SelecionarEndereco from '../Screen/SelecionarEndereco';
import SelecionarFormaDePagamento from '../Screen/SelecionarFormaDePagamento';
import EscolhaCategoria from '../Screen/EscolhaCategoria';
import VinhoPorPais from '../Screen/VinhoPorPais';
import CompraFinalizada from '../Screen/CompraFinalizada';


const Stack = createNativeStackNavigator();

export default function StackWelcome() {

    return (
        <Stack.Navigator initialRouteName="BoasVindas" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BoasVindas" component={BoasVindas} />
            <Stack.Screen name="Home" component={TabMenu} />
            <Stack.Screen name='SingIn' component={SingIn} />
            <Stack.Screen name='SingUp' component={SingUp} />

            <Stack.Screen
                name='DetalheProduto'
                component={DetalheProduto}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: '',
                    headerTitleStyle: {
                        marginRight: 10,
                    },
                    headerRight: () => (
                        <SimpleLineIcons
                            name="bag"
                            size={24}
                            color="black"
                            onPress={() => {
                                navigation.navigate('CarrinhoDeCompras');
                            }}
                        />
                    ),
                })}
            />

            <Stack.Screen
                name='CarrinhoDeCompras'
                component={CarrinhoDeCompras}
                options={() => ({
                    headerShown: true,
                    headerTitle: 'Carrinho',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        marginRight: 10,
                    },
                })}
            />

            <Stack.Screen
                name='SelecionarEndereco'
                component={SelecionarEndereco}
                options={() => ({
                    headerShown: true,
                    headerTitle: 'Adicionar endereço',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        marginRight: 10,
                    },
                })}
            />

            <Stack.Screen
                name='SelecionarFormaDePagamento'
                component={SelecionarFormaDePagamento}
                options={() => ({
                    headerShown: true,
                    headerTitle: 'Forma de Pagamento',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        marginRight: 10,
                    },
                })}
            />

            <Stack.Screen
                name='SelecionarEnderecoEPagamento'
                component={SelecionarEnderecoEPagamento}
                options={() => ({
                    headerShown: true,
                    headerTitle: 'Entrega e Pagamento',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        marginRight: 10,
                    },
                })}
            />

            <Stack.Screen
                name='EscolhaCategoria'
                component={EscolhaCategoria}
                options={() => ({
                    headerShown: true,
                    headerTitle: 'Vinhos',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        marginRight: 10,
                    },
                    headerRight: () => (
                        <SimpleLineIcons
                            name="bag"
                            size={24}
                            color="black"
                            onPress={() => {
                                navigation.navigate('CarrinhoDeCompras');

                            }}
                        />
                    ),
                })}
            />

            <Stack.Screen
                name='VinhoPorPais'
                component={VinhoPorPais}
                options={() => ({
                    headerShown: true,
                    headerTitle: 'Vinho Por Pais',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        marginRight: 10,
                    },
                    headerRight: () => (
                        <SimpleLineIcons
                            name="bag"
                            size={24}
                            color="black"
                            onPress={() => {
                                navigation.navigate('CarrinhoDeCompras');

                            }}
                        />
                    ),
                })}
            />

            <Stack.Screen
                name='CompraFinalizada'
                component={CompraFinalizada}
                options={() => ({
                    headerShown: true,
                    headerTitle: '',
                    headerTitleStyle: {
                        marginRight: 10,
                    }
                })}
            />

        </Stack.Navigator>


    );
}

