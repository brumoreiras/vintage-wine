import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoasVindas from './src/Component/BoasVindas';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Vintage Wine</Text>
      <BoasVindas/>
      
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
