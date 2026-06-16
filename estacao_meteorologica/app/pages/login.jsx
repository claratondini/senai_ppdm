import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/imagem.jpg')}
        style={styles.imagem}
        resizeMode="cover"
      />

      <View style={styles.formulario}>
        <Text style={styles.titulo}>Conecte-se</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Principal')}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text style={styles.textoCadastro}>
            Cadastre-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.textoCadastro}>
            Botão temporário
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  imagem: {
    width: '100%',
    height: 280,
  },

  formulario: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#0077cc',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    backgroundColor: '#fafafa',
  },

  botao: {
    backgroundColor: '#0077cc',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  botaoCadastro: {
    marginTop: 20,
  },

  textoCadastro: {
    textAlign: 'center',
    color: '#0077cc',
    fontWeight: 'bold',
    fontSize: 16,
  },
});