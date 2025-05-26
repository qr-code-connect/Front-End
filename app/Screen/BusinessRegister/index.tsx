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
  const [nome, setNome] = useState('');
  const [erroNome, setErroNome] = useState('');

  const validarNome = (nome: string) => {
    const regex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
    if (!regex.test(nome.trim())) {
      setErroNome('Nome inválido');
      return false;
    }
    setErroNome('');
    return true;
  };

  const emailValido = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEnviar = () => {
    const nomeValido = validarNome(nome);
    const emailOk = emailValido(email);

    if (nomeValido && emailOk) {
      setErroEmail('');
      setErroNome('');
      router.push('/Screen/BusinessRegister/CnpjandPhone');
    } else {
      if (!emailOk) setErroEmail('Digite um e-mail válido.');
      if (!nomeValido) setErroNome('Nome inválido');
    }
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
        <Title title="Cadastre-se" subtitle="Digite seu nome e seu email!" />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        {erroNome !== '' && <Text style={styles.errorText}>{erroNome}</Text>}

        <CustomInput
          label="Email"
          placeholder="Ex: usuario@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {erroEmail !== '' && <Text style={styles.errorText}>{erroEmail}</Text>}
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="Entrar" onPress={handleEnviar} />
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  header: {
    marginBottom: 60,
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
  buttonContainer: {
    marginTop: 40,
  },
});
