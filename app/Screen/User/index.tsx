import InputProfile from '@/app/components/InputProfile';
import ProfilePhoto from '@/app/components/ProfilePhoto';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LabelBottomNavigation from '../../components/NavBar';

export default function User() {

const logout  = () => { 
router.push('/Screen/Login')
}



  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Cabeçalho com título e botão de sair */}
        <View style={styles.header}>
          <Text style={styles.txt}>Meu perfil</Text>
          <TouchableOpacity style={styles.iconContainer} onPress={logout}>
            <MaterialIcons name='exit-to-app' color='white' size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileRow}>
          <ProfilePhoto />
          <View style={styles.textInfo}>
            <Text style={styles.name}>Guilherme Zeni</Text>
            <Text style={styles.textdefault}>Guimzeni@gmail.com</Text>
          </View>
        </View>

        <InputProfile title="Configurações" />
        <InputProfile title="Cadastre sua empresa" />
        <InputProfile title="Crie um evento" />
      </ScrollView>

      <View style={styles.navContainer}>
        <LabelBottomNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    paddingHorizontal: 30,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 39,
    marginBottom: 30,
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingLeft: 17,
  },
  textInfo: {
    marginLeft: -15,
    paddingTop: 20,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
  textdefault: {
    color: 'white',
    fontSize: 14,
  },
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    paddingBottom: 10,
    paddingTop: 4,
  },
  iconContainer: {
    paddingRight: 5,
  },
});
