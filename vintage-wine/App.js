import NavigationMenu from './src/Component/NavegationMenu';
import { NavigationContainer } from '@react-navigation/native';
import StackWelcome from './src/Routes/StackWelcome';
import BoasVindas from './src/Screen/BoasVindas';


export default function App() {
  return (
    <NavigationContainer>
      <StackWelcome>
        <BoasVindas />
      </StackWelcome >
    </NavigationContainer>




  );
}


/*

    <NavigationContainer>
      <TabMenu />
    </NavigationContainer>


import React from "react";
import { View, StyleSheet } from "react-native";
import Pesquisar from "./src/Screen/Pesquisar";

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Pesquisar />
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 42,
    borderWidth: 2
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
})  */