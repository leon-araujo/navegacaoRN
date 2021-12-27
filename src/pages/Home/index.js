import React from 'react';
import { Text, View , Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text> Home </Text>
      <Button
        title='Sobre'
        onPress={() => navigation.navigate('Sobre', {nome: 'lucas'})}
      />

      <Button
        title='Muda titulo'
        onPress={() => navigation.setOptions({title: 'Inicio'})}
      />

      <Button
        title='Volta Titulo'
        onPress={() => navigation.setOptions({title: 'Bem-vindo'})}
      />    
    </View>
  );
}
