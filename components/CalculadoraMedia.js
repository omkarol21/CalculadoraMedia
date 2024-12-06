import { Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {estilos} from '../assets/CSS/estilos'
import {useState} from 'react'

export default function Caculadora(){
  var [num1, setNum1] = useState('')
  var [num2, setNum2] = useState('')
  var [num3, setNum3] = useState('')
  var [num4, setNum4] = useState('')
  var [resultado, setResultado] = useState('')

  function Calcular(){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = parseFloat(num3)
    num4 = parseFloat(num4)

    resultado = (num1 + num2 + num3 + num4) / 4

    setResultado(resultado)
    console.log(resultado)
  }

  return(
    <View>

      <View style={estilos.tituloConjunto}>
        <Image style={estilos.img} source={require('../assets/IMG/IconNotas.png')}/>
        <Text style={estilos.titulo}>Media de Notas</Text>
      </View>  

      <Text style={estilos.text}>Nota 1:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setNum1} 
        value={num1} 
        placeholder=' Ex: 10... ' 
      keyboardType='numeric'/>

      <Text style={estilos.text}>Nota 2:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setNum2} 
        value={num2} 
        placeholder=' Ex: 10... ' 
      keyboardType='numeric'/>

      <Text style={estilos.text}>Nota 3:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setNum3} 
        value={num3} 
        placeholder=' Ex: 10... ' 
      keyboardType='numeric'/>

      <Text style={estilos.text}>Nota 3:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setNum4} 
        value={num4} 
        placeholder=' Ex: 10... ' 
      keyboardType='numeric'/>


      <TouchableOpacity style={estilos.botao} onPress={Calcular}>
        <Text style={estilos.textB}>Calcular Media</Text>
      </TouchableOpacity>

      <View style={estilos.result}>
        <Image style={estilos.icon} source={require('../assets/IMG/Icon(1).png')}/>
        <Text style={estilos.itemResult}>Num 1: {num1}</Text>
        <Text style={estilos.itemResult}>Num 2: {num2}</Text>
        <Text style={estilos.itemResult}>Num 3: {num3}</Text>
        <Text style={estilos.itemResult}>Num 4: {num4}</Text>
        <Text style={estilos.itemMedia}>Média: {resultado}</Text>
      </View>

    </View>
  )
}