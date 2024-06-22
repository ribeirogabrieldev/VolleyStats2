import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function PageIniciar({navigation}){
    const [nomePartida, setNomePartida] = React.useState();

    return(
        <View style={styles.page}>
            <View style={styles.table}>
                <Text style={styles.titulo}>Nome da partida</Text>
                <TextInput placeholder="Ex.: (Seu time) x Time B" value={nomePartida} onChangeText={setNomePartida} style={styles.input}></TextInput>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Jogadores')}>
                        <View>
                            <Text style={styles.buttonText}>Próximo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#FFFCB2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    table:{
        height: 300,
        width: 600,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        position: 'relative'
    },
    titulo:{
        fontSize: 20,
        marginBottom: 40,
        marginBottom: 20
    },
    input:{
        height: 40,
        width: 300,
        borderWidth: 1,
        paddingLeft: 15,
        marginBottom: 20
    },
    button:{
        width: 100,
        height: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 5,
        marginTop: 40,
        position: 'absolute',
        bottom: 15, 
        right: 15
    }
})