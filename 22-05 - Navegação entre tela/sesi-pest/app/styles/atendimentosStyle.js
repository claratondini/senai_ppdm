import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2E7D32',
  },

  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },

  pet: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  servico: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },

  horario: {
    fontSize: 14,
    color: '#2E7D32',
    marginTop: 5,
  },
});