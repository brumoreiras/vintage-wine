/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */


import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function BoasVindas() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/image-welcome.png')}
        resizeMode="cover"
        style={styles.imageWelcome}
      >

        <TouchableOpacity style={styles.closeButton} >
          <FontAwesome name="close" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.footer}>

          <View style={styles.viewBoasVindas}>
            <Text style={styles.txtBoasVindas}>Boas-vindas à Vintage Wine</Text>
            <Text style={styles.aboutText}>Explore nossos vinhos, onde cada garrafa conta uma historia.</Text>
          </View>


          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Cadastre-se</Text>
          </TouchableOpacity>

          <Text style={styles.loginLink} >Já possui uma conta? Faça o login</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  imageWelcome: {
    flex: 1,
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 2,
  },
  viewBoasVindas: {
    width: '95%',
    alignItems: 'lef',
    justifyContent: 'center'
  },
  txtBoasVindas: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'left',
    color: 'white',
  },
  aboutText: {
    fontSize: 24,
    fontWeight: 700,
    color: 'white',
    textAlign: 'left',
  },
  footer: {
    paddingHorizontal: 8,
    width: '343',
    height: '192',
    marginBottom: 16,
  },
  signUpButton: {
    fontSize: 16,
    width: '100%',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 16,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9A022B',
    textAlign: 'center',
  },
  loginLink: {
    fontSize: 12,
    fontWeight: 700,
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
});
