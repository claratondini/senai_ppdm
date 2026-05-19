import {View, Text, StyleSheet} from 'react-native';

export default function Header({titulo}){
    return(
        <View style = {estilos.container}>
            <Text style= {estilos.titulo}>{titulo}</Text>
            <Text syle= {estilos.subtitulo}>Organize seus estudos</Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#0878f9',
        paddingVertical: 20,
        paddingHorizontal:16,
        alignItems: 'center'
    },
    titulo:{
        fontSize:25,
        fontWeight:700,
        color:'white'
    },
    subtitulo:{
        fontSize:14,
        color:'#fe7f00',
        marginTop: 4,
    }
})