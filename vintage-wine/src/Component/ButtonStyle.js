import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function ButtonStyle(props) {
  const { onPress, title = 'Adicionar' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    /*  elevation: 3, */

    width: 150,
    fontWeight: '800',
    backgroundColor: '#FF6400',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '700',
    letterSpacing: 0.25,
    color: '#FFF',
  },
});