import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function PageIniciar({navigation}){
    return(
       <View style={styles.page}>
            <View style={styles.table}>
                <Text style={styles.titulo}>Insira o nome de cada jogador:</Text>
                <TextInput placeholder="Jogador 1" style={styles.input}></TextInput>
                <TextInput placeholder="Jogador 2" style={styles.input}></TextInput>
                <TextInput placeholder="Jogador 3" style={styles.input}></TextInput>
                <TextInput placeholder="Jogador 4" style={styles.input}></TextInput>
                <TextInput placeholder="Jogador 5" style={styles.input}></TextInput>
                <TextInput placeholder="Jogador 6" style={styles.input}></TextInput>
                <TextInput placeholder="Jogador 7" style={styles.input}></TextInput>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Table')}>
                        <View>
                            <Text style={styles.buttonText}>Iniciar</Text>
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
        padding: 15,
        height: 300,
        width: 600,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        position: 'relative'
    },
    titulo:{
        fontSize: 20
    },
    input:{
        paddingVertical: 0,
        paddingHorizontal: 15,
        width: 200,
        height: 30
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