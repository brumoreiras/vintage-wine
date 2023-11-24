import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SingUp() {
  return (
    <View style={styles.container}>
      <Text>Meu Componente React Native</Text>
      <Text>Este é um exemplo de um componente React Native.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
