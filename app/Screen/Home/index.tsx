import InputMain from '@/app/components/inputMain';
import SponsorInput from '@/app/components/sponsorshipsInput';
import Title from '@/app/components/TitleandSubtitle';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Olá Guilherme" subtitle="Explore descubra e aproveite" />
      <SponsorInput />

       <InputMain title='Shows' /> 
       <InputMain title='Standup' /> 
       <InputMain title='Jantares' />
       <InputMain title='Baladas' /> 


    
    <View style={styles.containerVendas}>
        <Text style={styles.VendaText}>Mais</Text>
    </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  containerVendas: {

  },
  VendaText: {
      color: 'white',
    fontSize: 30,
    fontWeight: '700', // Mesmo que a fonte bold já faz, pode manter
    marginBottom: 4,
  }
});
