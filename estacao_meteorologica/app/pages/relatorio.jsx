import { View, Text, FlatList, StyleSheet } from 'react-native';

const medicoes = [
  {
    id: 1,
    temp: 30,
    hum: 50,
    vento: 20,
    mes: 'Janeiro',
  },
  {
    id: 2,
    temp: 24,
    hum: 60,
    vento: 70,
    mes: 'Fevereiro',
  },
  {
    id: 3,
    temp: 40,
    hum: 56,
    vento: 30,
    mes: 'Março',
  },
  {
    id: 4,
    temp: 36,
    hum: 80,
    vento: 45,
    mes: 'Abril',
  },
];

function ItemLista({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.mes}>{item.mes}</Text>

      <View style={styles.linha}>
        <Text style={styles.label}>🌡️ Temperatura</Text>
        <Text style={styles.valor}>{item.temp}°C</Text>
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>💧 Umidade</Text>
        <Text style={styles.valor}>{item.hum}%</Text>
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>🌬️ Vento</Text>
        <Text style={styles.valor}>{item.vento} km/h</Text>
      </View>
    </View>
  );
}

export default function Relatorio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Relatório Meteorológico
      </Text>

      <FlatList
        data={medicoes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemLista item={item} />}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08386B',
    padding: 15,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 20,
  },

  lista: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: '#114D8E',
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#2D6CB3',
  },

  mes: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0D437C',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  label: {
    fontSize: 15,
    color: '#D7E8FF',
    fontWeight: '500',
  },

  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});