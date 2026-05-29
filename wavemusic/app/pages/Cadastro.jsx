import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/cadastroStyle';

export default function Cadastro({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Cadastro
      </Text>

      <TextInput
        placeholder='Nome'
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TextInput
        placeholder='Email'
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TextInput
        placeholder='Senha'
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder='Confirmar senha'
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.link}>
          Voltar ao login
        </Text>
      </TouchableOpacity>

    </View>
  );
}