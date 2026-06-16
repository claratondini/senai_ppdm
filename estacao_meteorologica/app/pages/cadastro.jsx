import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cadastro() {
  const [temp, setTemp] = useState("");
  const [hum, setHum] = useState("");
  const [kmVento, setKmVento] = useState("");

  function salvar() {
    Alert.alert(
      "Medição salva",
      `Temperatura: ${temp}°C\nUmidade: ${hum}%\nVento: ${kmVento} km/h`,
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Medição</Text>

      <TextInput
        style={styles.input}
        placeholder="Temperatura °C"
        value={temp}
        onChangeText={setTemp}
      />

      <TextInput
        style={styles.input}
        placeholder="Umidade %"
        value={hum}
        onChangeText={setHum}
      />

      <TextInput
        style={styles.input}
        placeholder="Km do vento"
        value={kmVento}
        onChangeText={setKmVento}
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#0077cc",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  botao: {
    backgroundColor: "#0077cc",
    padding: 15,
    borderRadius: 10,
  },

  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
