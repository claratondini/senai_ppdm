import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';

import { musicas as listaInicial } from './musicas';

export default function Home() {

  const [musicas, setMusicas] = useState(listaInicial);

  function favoritar(id) {

    const novaLista = musicas.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          favorito: !item.favorito,
        };
      }

      return item;
    });

    setMusicas(novaLista);
  }

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
        }}
      >
        WaveMusic
      </Text>

      <Text
        style={{
          color: '#aaa',
          fontSize: 18,
          marginBottom: 20,
        }}
      >
        Ouça suas músicas favoritas
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/favoritos')}
        style={{
          backgroundColor: '#1DB954',
          padding: 14,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >

        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Favoritos
        </Text>

      </TouchableOpacity>

      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <View
            style={{
              backgroundColor: '#282828',
              padding: 20,
              borderRadius: 15,
              marginBottom: 15,
            }}
          >

            <TouchableOpacity
              onPress={() => router.push('/tocando')}
            >

              <Text
                style={{
                  color: '#fff',
                  fontSize: 22,
                  fontWeight: 'bold',
                }}
              >
                {item.titulo}
              </Text>

              <Text
                style={{
                  color: '#aaa',
                  marginTop: 5,
                  marginBottom: 15,
                }}
              >
                {item.artista}
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => favoritar(item.id)}
              style={{
                backgroundColor: item.favorito
                  ? '#1DB954'
                  : '#444',

                padding: 10,
                borderRadius: 10,
              }}
            >

              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {item.favorito
                  ? 'Remover Favorito'
                  : 'Adicionar Favorito'}
              </Text>

            </TouchableOpacity>

          </View>

        )}
      />

    </View>
  );
}