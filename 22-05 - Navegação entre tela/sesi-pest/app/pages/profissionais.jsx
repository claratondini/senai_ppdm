import { View, Text, FlatList } from 'react-native';
import { profissionais } from '../dados/profissionais';
import styles from '../styles/profissionaisStyle';

export default function Profissionais() {

    return (

        <View style={styles.container}>

            <Text style={styles.nome}>
                Profissionais
            </Text>

            <FlatList
                data={profissionais}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (

                    <View style={styles.card}>

                        <Text style={styles.nome}>
                            {item.nome}
                        </Text>

                        <Text style={styles.especialidade}>
                            {item.especialidade}
                        </Text>

                    </View>

                )}
            />

        </View>

    );
}