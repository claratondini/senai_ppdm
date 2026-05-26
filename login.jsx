import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/loginStyle';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Bem Vindo ao Sesi Pet
            </Text>

            <Text style={styles.subtitulo}>
                Insira seus dados
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Insira seu e-mail"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="*****"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.replace('Principal')}
            >
                <Text style={styles.textoBotao}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoCadastro}
                onPress={() => navigation.navigate('Registro')}
            >
                <Text style={styles.textoBotao}>
                    Cadastrar
                </Text>
            </TouchableOpacity>

        </View>
    );
}
