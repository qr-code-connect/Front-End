import CustomButton from '@/app/components/Button';
import CustomInput from '@/app/components/CustomInput';
import Title from '@/app/components/TitleandSubtitle';
import { formatarTelefone } from '@/app/validation/telefone';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PhoneRegister() {
  const [telefone, setTelefone] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');

  const validarTelefone = (telefone: string) => {
    const numeros = telefone.replace(/\D/g, '');
    if (numeros.length < 10 || numeros.length > 11) {
      setErroTelefone('Telefone inválido.');
      return false;
    }

    setErroTelefone('');
    return true;
  };

  const registerOnpress = () => {
    router.replace('/Screen/RegisterScreen/email');
  };

  const handleEnviar = () => {
    if (validarTelefone(telefone)) {
      router.push('/Screen/RegisterScreen/password');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Title title="Cadastre-se" subtitle="Digite seu telefone!" />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label="Telefone"
          placeholder="(99) 99999-9999"
          value={telefone}
          keyboardType="phone-pad"
          onChangeText={(text) => setTelefone(formatarTelefone(text))}
        />
        {erroTelefone ? <Text style={styles.errorText}>{erroTelefone}</Text> : null}
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
