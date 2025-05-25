import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import InputMain from '@/app/components/inputMain';
import LabelBottomNavigation from '@/app/components/NavBar';
import SponsImage from '@/app/components/SponsImage';
import Title from '@/app/components/TitleandSubtitle';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Title title="Olá Guilherme" subtitle="Explore descubra e aproveite" />
          <SponsImage />
          <Text style={styles.Txt}>Ingressos</Text>
          <InputMain title="Shows" />
          <InputMain title="Standup" />
          <InputMain title="Jantares" />
          <InputMain title="Baladas" />
        </ScrollView>

        <View style={styles.navContainer}>
          <LabelBottomNavigation />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  navContainer: {
    backgroundColor: '#fff', // cor do fundo da navegação
  },
  containerVendas: {
    marginTop: 20,
  },
  Txt: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 4,
  },
});
