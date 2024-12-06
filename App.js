import {SafeAreaView, ScrollView, View} from 'react-native';
import {estilos} from './assets/CSS/estilos'
import CalculadoraMedia from './components/CalculadoraMedia'

export default function App() {
  
  return (
    
    <SafeAreaView style={estilos.container} >
      <ScrollView>
        <View>
          
        <CalculadoraMedia/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
