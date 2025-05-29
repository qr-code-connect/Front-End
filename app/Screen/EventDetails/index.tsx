import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function EventDetails() {
  const router = useRouter();
  const { title, type, price, date } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <AntDesign name="left" size={30} color="white" />
      </TouchableOpacity>
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>Tipo: {type}</Text>
      <Text style={styles.detail}>Preço: R$ {price}</Text>
      <Text style={styles.detail}>Data: {date}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detail: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
});
