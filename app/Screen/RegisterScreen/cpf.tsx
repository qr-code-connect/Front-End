import CustomButton from '@/app/components/Button';
import CustomInput from '@/app/components/CustomInput';
import Title from '@/app/components/TitleandSubtitle';
import { validarCPF } from '@/app/validation/validationCPF';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CpfRegister() {
  const [cpf, setCpf] = useState('');
  const [erroCpf, setErroCpf] = useState('');

   const formatarCPF = (texto: string) => {
    const numeros = texto.replace(/\D/g, '');
    let formatado = numeros;
    if (numeros.length > 3) formatado = formatado.replace(/^(\d{3})(\d)/, '$1.$2');
    if (numeros.length > 6) formatado = formatado.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    if (numeros.length > 9) formatado = formatado.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    return formatado;
  };

  const handleEnviar = () => {
    const cpfValido = validarCPF(cpf);
    if (!cpfValido) {
      setErroCpf('CPF inválido.');
      return;
    }
    setErroCpf('');
    router.push('/Screen/Introduction');
  };

  const registerOnpress = () => {
    router.replace('/Screen/RegisterScreen/email');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Title title="Cadastre-se" subtitle="Cadastre seu CPF!" />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label="CPF"
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={(text) => setCpf(formatarCPF(text))}
          keyboardType='numeric'
        />
        {erroCpf ? <Text style={styles.errorText}>{erroCpf}</Text> : null}
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
