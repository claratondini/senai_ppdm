import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >

      <Text
        style={{
          color: '#1DB954',
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 40,
        }}
      >
        WaveMusic
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/login')}
        style={{
          backgroundColor: '#1DB954',
          padding: 15,
          borderRadius: 10,
          width: '100%',
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}