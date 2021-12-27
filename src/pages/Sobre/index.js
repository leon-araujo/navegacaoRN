import React from 'react';
import { Text, View } from 'react-native';

export default function Contato({route}) {
  return (
    <View>
      <Text> Sobre: {route.params.nome} </Text>
    </View>
  );
}

