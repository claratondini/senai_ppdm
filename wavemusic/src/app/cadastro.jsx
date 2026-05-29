import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar() {

    if (
      nome === '' ||
      email === '' ||
      senha === ''
    ) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    Alert.alert('Sucesso', 'Conta criada');

    router.push('/login');
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        padding: 20,
      }}
    >

      <Text
        style={{
          color: '#1DB954',
          fontSize: 35,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        Cadastro
      </Text>

      <TextInput
        placeholder='Nome'
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
        style={{
          backgroundColor: '#282828',
          color: '#fff',
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder='Email'
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        style={{
          backgroundColor: '#282828',
          color: '#fff',
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder='Senha'
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{
          backgroundColor: '#282828',
          color: '#fff',
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={cadastrar}
        style={{
          backgroundColor: '#1DB954',
          padding: 15,
          borderRadius: 10,
        }}
      >

        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          Cadastrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/login')}
      >

        <Text
          style={{
            color: '#1DB954',
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          Voltar ao login
        </Text>

      </TouchableOpacity>

    </View>
  );
}