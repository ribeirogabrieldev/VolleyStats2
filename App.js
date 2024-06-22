import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/screens/HomePage/HomePage'
import PageIniciar from './src/screens/PageIniciar/PageIniciar'
import PagePlayers from './src/screens/PagePlayers/PagePlayers'
import PageTable from './src/screens/PageTable/PageTable';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="Iniciar" component={PageIniciar}/>
        <Stack.Screen name="Jogadores" component={PagePlayers}/>
        <Stack.Screen name="Table" component={PageTable}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}