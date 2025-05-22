import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'; // ou você pode usar seu loader próprio
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TitleProps = {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  // Carregando as fontes Inter
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />; // Mostra uma tela de loading até a fonte carregar
  }

  return (
    <View style={styles.container}> 
      <Text style={[styles.title, { fontFamily: 'Inter_700Bold' }]}>{title}</Text>
      <Text style={[styles.subtitle, { fontFamily: 'Inter_400Regular' }]}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    backgroundColor: '#000',
    alignItems: "flex-start",
    marginBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: '700', // Mesmo que a fonte bold já faz, pode manter
    marginBottom: 4,
  },
  subtitle: {
    color: '#CCCCCC',
  }
});

export default Title;
