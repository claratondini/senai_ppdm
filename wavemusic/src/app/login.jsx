import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {

    if (email === '' || senha === '') {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    router.push('/home');
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
          fontSize: 38,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        WaveMusic
      </Text>

      <TextInput
        placeholder='Digite seu email'
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
        placeholder='Digite sua senha'
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
        onPress={entrar}
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
          Entrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/cadastro')}
      >

        <Text
          style={{
            color: '#1DB954',
            textAlign: 'center',
            marginTop: 20,
            fontSize: 16,
          }}
        >
          Criar conta
        </Text>

      </TouchableOpacity>

    </View>
  );
}