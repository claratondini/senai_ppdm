import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function Registro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/imagem.jpg")}
        resizeMode="cover"
        style={styles.logo}
      />

      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastre-se</Text>

        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confSenha}
          onChangeText={setConfSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => console.log("Cadastrar")}
        >
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation?.replace?.("Login")}
        >
          <Text style={styles.link}>
            Já possui conta? Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f4f4",
  },

  logo: {
    width: "100%",
    height: 250,
  },

  card: {
    backgroundColor: "#fff",
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
    flex: 1,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0077cc",
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },

  botao: {
    backgroundColor: "#0077cc",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#0077cc",
    fontWeight: "bold",
  },
});