import { router } from 'expo-router';
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
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Title title="Olá Guilherme" subtitle="Explore descubra e aproveite" />
          <SponsImage />

          <Text style={styles.Txt}>Ingressos</Text>

         <InputMain title="Shows" onPress={() => router.push({ pathname: '/Screen/SeeEvents', params: { type: 'Shows' } })} />
          <InputMain title="Standup" onPress={() => router.push({ pathname: '/Screen/SeeEvents', params: { type: 'Standup' } })} />
          <InputMain title="Jantares" onPress={() => router.push({ pathname: '/Screen/SeeEvents', params: { type: 'Jantares' } })} />
          <InputMain title="Baladas" onPress={() => router.push({ pathname: '/Screen/SeeEvents', params: { type: 'Baladas' } })} />

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
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  navContainer: {
    backgroundColor: '#fff',
  },
  Txt: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
});
