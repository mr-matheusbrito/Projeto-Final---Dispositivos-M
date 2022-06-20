import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default function Login() {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/logo.jpg')}
      style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
      />

        <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />
      <TouchableOpacity 
      style={styles.botao}
      onPress={ () => {this.clicou()}}
      >
      <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2c3e50'
  },
  logo:{
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao:{
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }

});
