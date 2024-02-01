import { StatusBar } from 'react-native';
import { Header } from './src/components/Header';
import { ContainerApp } from './style';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ScrollView } from 'react-native-web';
import { Home } from './src/screens/Homescreen';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar barStyle='default' backgroundColor='transparent' translucent/>
      
      <Header/>
      <Home/>
    </ContainerApp>
  );
}
