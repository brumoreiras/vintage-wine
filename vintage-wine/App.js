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
