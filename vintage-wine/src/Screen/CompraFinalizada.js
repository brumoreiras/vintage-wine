import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function CompraFinalizada() {
  const [mensagem, setMensagem] = useState('Compra realizada com sucesso! Breve você receberá seu vinho.');
  const [fraseSteveJobs, setFraseSteveJobs] = useState(`"Cada sonho que você deixa para trás, é um pedaço do seu futuro que deixa de existir"\n\n Steve Jobs`);

  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animação para exibir a mensagem de compra realizada com sucesso
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Delay para exibir a frase de Steve Jobs após alguns segundos
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        // Atualizar a mensagem para a frase de Steve Jobs
        setMensagem(fraseSteveJobs);
        // Animação para exibir a frase de Steve Jobs
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }, 3000); // Ajuste o tempo conforme necessário
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, { opacity }]}>
        <Text style={styles.cardText}>{mensagem}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#000', // Cor de fundo do card (pode ser ajustada)
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff', // Cor do texto (pode ser ajustada)
  },
});
