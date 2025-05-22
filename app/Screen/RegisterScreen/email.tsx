import CustomButton from '@/app/components/Button';
import CustomInput from '@/app/components/CustomInput';
import Title from '@/app/components/TitleandSubtitle';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function EmailRegister() {
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  const handleEnviar = () => {
    if (emailValido(email)) {
      setErroEmail('');
      router.push('/Screen/RegisterScreen/nome');
    } else {
      setErroEmail('Digite um e-mail válido.');
    }
  };

  const emailValido = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const registerOnpress = () => {
    router.replace('/Screen/Introduction');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Title title="Cadastre-se" subtitle="Digite seu email!" />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label="Email"
          placeholder="Ex: usuario@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
        />
        {erroEmail !== '' && <Text style={styles.errorText}>{erroEmail}</Text>}
      </View>

      <View style={styles.button}>
        <CustomButton title="Entrar" onPress={handleEnviar} />
      </View>

      <Text style={styles.footerText}>
        Possui uma conta?{' '}
        <Text style={styles.link} onPress={registerOnpress}>
          Entre
        </Text>
      </Text>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  header: {
    marginBottom: 100,
  },
  inputContainer: {
    gap: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    marginBottom: 8,
    fontSize: 14,
  },
  button: {
    marginTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
  },
  link: {
    color: '#4679D9',
  },
  footerText: {
    marginTop: 40,
    color: 'white',
    textAlign: 'center',
  },
});
