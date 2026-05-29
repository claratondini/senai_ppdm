import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

export default function Tocando() {

  const musicas = [
    'Coração Cachorro',
    'Dona de Mim',
    'Ela Partiu',
    'Meu Abrigo',
  ];

  const artistas = [
    'Ávine Vinny',
    'Iza',
    'Tim Maia',
    'Melim',
  ];

  const [indice, setIndice] = useState(0);
  const [tocando, setTocando] = useState(true);

  function proxima() {

    if (indice < musicas.length - 1) {
      setIndice(indice + 1);
    }
  }

  function voltar() {

    if (indice > 0) {
      setIndice(indice - 1);
    }
  }

  function pausar() {
    setTocando(!tocando);
  }

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

      <View
        style={{
          width: 280,
          height: 280,
          backgroundColor: '#282828',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 40,
        }}
      >

        <Text
          style={{
            fontSize: 90,
          }}
        >
          🎵
        </Text>

      </View>

      <Text
        style={{
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        {musicas[indice]}
      </Text>

      <Text
        style={{
          color: '#aaa',
          fontSize: 18,
          marginTop: 10,
          marginBottom: 40,
        }}
      >
        {artistas[indice]}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          gap: 20,
        }}
      >

        <TouchableOpacity
          onPress={voltar}
          style={{
            backgroundColor: '#282828',
            padding: 20,
            borderRadius: 50,
          }}
        >

          <Text
            style={{
              color: '#fff',
              fontSize: 22,
            }}
          >
            ⏮
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={pausar}
          style={{
            backgroundColor: '#1DB954',
            padding: 22,
            borderRadius: 50,
          }}
        >

          <Text
            style={{
              color: '#fff',
              fontSize: 22,
            }}
          >
            {tocando ? '⏸' : '▶'}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={proxima}
          style={{
            backgroundColor: '#282828',
            padding: 20,
            borderRadius: 50,
          }}
        >

          <Text
            style={{
              color: '#fff',
              fontSize: 22,
            }}
          >
            ⏭
          </Text>

        </TouchableOpacity>

      </View>

      <Text
        style={{
          color: '#1DB954',
          marginTop: 30,
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        {tocando ? 'Tocando Agora' : 'Música Pausada'}
      </Text>

    </View>
  );
}