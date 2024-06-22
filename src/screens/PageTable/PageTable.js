import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default function PageTable({navigation}){

    const [columns, setColumns] = useState([
        { name: 'Passe', data: [0, 0, 0, 0, 0, 0, 0] },
        { name: 'Ataque', data: [0, 0, 0, 0, 0, 0, 0] },
        { name: 'Saque', data: [0, 0, 0, 0, 0, 0, 0] },
        { name: 'Block', data: [0, 0, 0, 0, 0, 0, 0] },
    ]);
    
    const incrementNum = (columnIndex, rowIndex) => {
    const newColumns = [...columns];
    newColumns[columnIndex].data[rowIndex] += 1;
    setColumns(newColumns);
    };

    return(
       <View style={styles.page}>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <View style={styles.cell}></View>
                    <View style={styles.cell}><TextInput placeholder="Jogador 1" style={styles.input}></TextInput></View>
                    <View style={styles.cell}><TextInput placeholder="Jogador 2" style={styles.input}></TextInput></View>
                    <View style={styles.cell}><TextInput placeholder="Jogador 3" style={styles.input}></TextInput></View>
                    <View style={styles.cell}><TextInput placeholder="Jogador 4" style={styles.input}></TextInput></View>
                    <View style={styles.cell}><TextInput placeholder="Jogador 5" style={styles.input}></TextInput></View>
                    <View style={styles.cell}><TextInput placeholder="Jogador 6" style={styles.input}></TextInput></View>
                    <View style={styles.cell}><TextInput placeholder="Jogador 7" style={styles.input}></TextInput></View>
                </View> 
                {columns.map((column, columnIndex) => (
                    <View key={columnIndex} style={styles.coluna}>
                    <View style={styles.cell}><Text style={styles.buttonText}>{column.name}</Text></View>
                    {column.data.map((value, rowIndex) => (
                        <TouchableOpacity key={rowIndex} onPress={() => incrementNum(columnIndex, rowIndex)}>
                        <View style={styles.cell}>
                            <Text style={styles.buttonText}>{value.toString()}</Text>
                        </View>
                        </TouchableOpacity>
                    ))}
                    </View>
                ))}
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFCB2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    linha:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    coluna:{
        flexDirection: 'column',
        justifyContent: 'center',
       },
    cell:{
        borderWidth:1,
        height: 38,
        width: 112,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    text:{
        padding: 0,
        margin: 0,
        fontSize: 15
    }
})