import React from 'react';
import { Text, View } from 'react-native';

export default function Perfil({route}) {
  return (
    <View>
      <Text>Nome do Gerente: {route.params.nome}</Text>
      <Text>Endereço: {route.params.fone}</Text>
      <Text>Telefone: {route.params.endereco}</Text>
    </View>
  );
}

