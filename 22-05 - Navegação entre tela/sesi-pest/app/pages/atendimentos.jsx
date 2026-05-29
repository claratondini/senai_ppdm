import { View, Text, FlatList } from 'react-native';
import { atendimentos } from '../dados/profissionais';
import styles from '../styles/atendimentosStyle';

export default function Atendimento() {

    return (

        <View style={styles.container}>

            <Text style={styles.pet}>
                Atendimentos
            </Text>

            <FlatList
                data={atendimentos}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (

                    <View style={styles.card}>

                        <Text style={styles.pet}>
                            {item.pet}
                        </Text>

                        <Text style={styles.servico}>
                            {item.servico}
                        </Text>

                        <Text style={styles.horario}>
                            {item.horario}
                        </Text>

                    </View>

                )}
            />

        </View>

    );
}