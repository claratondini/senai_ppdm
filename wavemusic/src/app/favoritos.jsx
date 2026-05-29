import { View, Text } from 'react-native';

export default function Favoritos() {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
      }}
    >

      <Text
        style={{
          color: '#1DB954',
          fontSize: 35,
          fontWeight: 'bold',
          marginBottom: 25,
        }}
      >
        Favoritos
      </Text>

      <View
        style={{
          backgroundColor: '#282828',
          padding: 20,
          borderRadius: 15,
          marginBottom: 15,
        }}
      >

        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Ela Partiu
        </Text>

        <Text
          style={{
            color: '#aaa',
            marginTop: 5,
            fontSize: 16,
          }}
        >
          Tim Maia
        </Text>

      </View>

      <View
        style={{
          backgroundColor: '#282828',
          padding: 20,
          borderRadius: 15,
          marginBottom: 15,
        }}
      >

        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Idiota
        </Text>

        <Text
          style={{
            color: '#aaa',
            marginTop: 5,
            fontSize: 16,
          }}
        >
          Jão
        </Text>

      </View>

      <View
        style={{
          backgroundColor: '#282828',
          padding: 20,
          borderRadius: 15,
        }}
      >

        <Text
          style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Meu Abrigo
        </Text>

        <Text
          style={{
            color: '#aaa',
            marginTop: 5,
            fontSize: 16,
          }}
        >
          Melim
        </Text>

      </View>

    </View>
  );
}