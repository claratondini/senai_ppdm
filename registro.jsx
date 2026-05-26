import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/registroStyle';

export default function Registro({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confsenha, setConfSenha] = useState('');

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Bem Vindo ao Sesi Pet
            </Text>

            <Text style={styles.titulo}>
                Cadastre-se
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Insira seu email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Insira sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                value={confsenha}
                onChangeText={setConfSenha}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.replace('Login')}
            >

                <Text style={styles.textoBotao}>
                    Cadastrar
                </Text>

            </TouchableOpacity>

        </View>

    );
}