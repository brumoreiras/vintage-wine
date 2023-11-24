// Remover este componente do projeto. 

import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Feather, AntDesign } from '@expo/vector-icons';

import Home from '../Screen/Home'
import BoasVindas from '../Screen/BoasVindas';
import Categorias from '../Screen/Categorias';
import Pesquisar from '../Screen/Pesquisar';
import Profile from '../Screen/Profile';

const Tab = createBottomTabNavigator();

export default function NavigationMenu() {
    return (

        <Tab.Navigator>
             <Tab.Screen //remover depois esse aqui é so para teste
                name="BoasVindas"
                component={BoasVindas}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='home' size={20} color={'#998F8F'} />
                    )
                }}

            />
            <Tab.Screen
                name="Vintage Wine"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='home' size={20} color={'#998F8F'} />
                    )
                }}

            />
            <Tab.Screen
                name="Categorias"
                component={Categorias}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='list' size={20} color={'#998F8F'} />
                    )
                }}

            />
            <Tab.Screen
                name="Pesquisar"
                component={Pesquisar}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='search' size={20} color={'#998F8F'} />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='user' size={20} color={'#998F8F'} />
                    )
                }}
            />
        </Tab.Navigator >


    )
}