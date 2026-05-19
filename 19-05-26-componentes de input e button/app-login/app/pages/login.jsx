import {useState} from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import Logo from '../../assets/images/clara.png';

export default function Login(){
  const [email, setEmail]= useState('');
  const [senha, setSenha]= useState('');

  function Login(){
    console.log('Dados do login');
    console.log({email, senha});
  }
  return(
    <ScrollView style= {estilos.container}>
      <Image
      source={Logo}
      syle={estilos.log}
      resizeMode='contain'
      />
      <Text syle= {estilos.titulo}>MovieFlix</Text>
        <Text syle= {estilos.sub}>Descubra os melhores filmes para assistir</Text>
        <View style = {estilos.form}>
          <Text style = {estilos.label}>E-mail</Text>
          <TextInput
          style={estilos.input}
          placeholder='Digite seu e-mail'
          keyboardType='email-address'
          autoCapitalize='nome'
          value={email}
          onChangeText={setEmail}
          />
          <Text style = {estilos.label}>Senha</Text>
          <TextInput
          style={estilos.input}
          placeholder='******'
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          />
          <TouchableOpacity style= {estilos.botao}>Login</TouchableOpacity>

        </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 20,
  },

  log: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  titulo: {
    color: '#E50914',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  sub: {
    color: '#B3B3B3',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },

  form: {
    backgroundColor: '#1F1F1F',
    padding: 20,
    borderRadius: 15,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#2C2C2C',
    color: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#E50914',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

