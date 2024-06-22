import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function HomePage({navigation}) {
    return (
      <View style={styles.homePage}>
        <TouchableOpacity onPress={()=>navigation.navigate('Iniciar')} style={styles.button}>
          <View>
            <Text style={styles.buttonText}>INICIAR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity /*onPress={}*/ style={styles.button} >
          <View>
            <Text style={styles.buttonText}>RELATÓRIOS</Text>
          </View>
        </TouchableOpacity>
  
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    homePage:{
      flex: 1,
      backgroundColor: '#FFFCB2',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button:{
      width: 200,
      height: 60,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      elevation: 5,
      marginTop: 40,
    },
    buttonText:{
      fontSize: 20,
    }
  })