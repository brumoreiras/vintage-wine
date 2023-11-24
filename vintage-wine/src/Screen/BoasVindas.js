import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function BoasVindas({ navigation }) {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/image-welcome.png')}
        resizeMode="cover"
        style={styles.imageWelcome}
      >
        <View style={styles.topo}>
          <Text style={styles.logo}>Vintage Wine</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>


        <View style={styles.containerInfo}>

          <View style={styles.viewBoasVindas}>
            <Text style={styles.txtBoasVindas}>Boas-vindas à Vintage Wine</Text>
            <Text style={styles.aboutText}>Explore nossos vinhos, onde cada garrafa conta uma historia.</Text>
          </View>


          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SingUp')}
          >
            <Text style={styles.signUpText}>Cadastre-se</Text>
          </TouchableOpacity >

          <TouchableOpacity
            onPress={() => navigation.navigate('SingIn')}
          >
            <Text style={styles.loginLink} >Já possui uma conta? Faça o login</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageWelcome: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 36

  },
  topo: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 42,
    right: 16,
  },
  logo: {
    fontSize: 28,
    color: '#FFF',
    paddingHorizontal: 16
  },
  closeButton: {
    /*  position: 'absolute',
     top: 42,
     right: 16,
     zIndex: 2, */
  },
  viewBoasVindas: {
    width: '95%',
    alignItems: 'lef',
    justifyContent: 'center'
  },
  txtBoasVindas: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    color: 'white',
  },
  aboutText: {
    fontSize: 24,
    fontWeight: '900',
    color: 'white',
    textAlign: 'left',
  },
  containerInfo: {
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
    fontWeight: '900',
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
});