import {useState} from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import Logo from '../../assets/images/puma.png';

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
      <Text syle= {estilos.titulo}>PUMA</Text>
        <Text syle= {estilos.sub}>Forever Faster</Text>
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
          <TouchableOpacity style={estilos.botao} onPress={Login}>
  <Text style={estilos.textoBotao}>Entrar</Text>
</TouchableOpacity>

        </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },

  log: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  sub: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },

  form: {
    backgroundColor: '#111',
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: '#FFD700',
  },

  label: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 15,
    elevation: 5,
  },

  textoBotao: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});