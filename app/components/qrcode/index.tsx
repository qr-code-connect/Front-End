import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRCodeScreen() {
  const { nome, descricao, data, tipo } = useLocalSearchParams();

  const evento = JSON.stringify({ nome, descricao, data, tipo });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu ingresso para o evento</Text>
      <QRCode value={evento} size={250} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
});
