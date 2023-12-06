import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

import Home from '../Screen/Home';
import Categorias from '../Screen/Categorias';
import Pesquisar from '../Screen/Pesquisar';
import Profile from '../Screen/Profile';
import VinhoPorPais from '../Screen/VinhoPorPais';


const Tab = createBottomTabNavigator();


export default function TabMenu() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    display: 'flex',
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen
                name="Vintage Wine"
                component={Home}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: 'Vintage Wine',
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

                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='home' size={20} color={'#998F8F'} />
                    )
                })}






            />
            <Tab.Screen
                name="Categorias"
                component={Categorias}
                options={{
                    headerTitleStyle: {
                        marginRight: 10,
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='list' size={20} color={'#998F8F'} />
                    ),
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
                }}


            />
            <Tab.Screen
                name="Pesquisar"
                component={Pesquisar}
                
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='search' size={20} color={'#998F8F'} />
                    )
                }}

            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='user' size={20} color={'#998F8F'} />
                    )
                }}

            />
        </Tab.Navigator >
    )
}
