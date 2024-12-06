import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBEAF6'
  },

  titulo: {
    fontSize: 26,
    fontFamily: 'Cooper Black',
    color: '#DF7A6E',
    marginBottom: 22
  },

  img: {
    width: 50,
    height: 50,
    marginTop: -10,
    marginRight: 10
  },

  tituloConjunto: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
  },

  text: {
    fontSize: 16,
    fontFamily: 'Berlin Sans FB',
    marginLeft: 15,
  },

  input: {
    width: 300,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#DF7A6E',
    padding: 15,
    marginTop: 10,
    marginBottom: 30,
  },

  botao: {
    width: 180,
    height: 45,
    backgroundColor: '#DF7A6E',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 65
  },

  textB: {
    fontSize: 18,
    fontFamily: 'Cooper Black',
    alignSelf: 'center',
    color: '#FFF'
  },

  icon: {
    width:70,
    height: 70,
    alignSelf: 'center',
    marginTop: -35,
    marginBottom: 20,
  },

  result: {
    backgroundColor: '#DF7A6E',
    width: 300,
    height: 250,
    borderRadius: 20,
  },

  itemResult: {
    fontSize: 18,
    fontFamily: 'Berlin Sans FB',
    color: '#FFF',
    alignSelf: 'center',
    marginBottom: 10,
  },

  itemMedia: {
    fontSize: 20,
    fontFamily: 'Cooper Black',
    color: '#FFF',
    alignSelf: 'center',
    marginTop: 20,
  }
})