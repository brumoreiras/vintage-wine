import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SimpleLineIcons } from '@expo/vector-icons';


import BoasVindas from '../Screen/BoasVindas';
import TabMenu from './TabMenu'
import SingIn from '../Screen/SingIn';
import SingUp from '../Screen/SingUp';
import DetalheProduto from '../Screen/DetalheProduto';


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
                    headerRight: () => (
                        <SimpleLineIcons
                            name="bag"
                            size={24}
                            color="black"
                            onPress={() => {
                                // incluir o componente carrinho
                                console.log('Navegar para a tela do carrinho');
                            }}
                        />
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

