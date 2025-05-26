import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CustomButton from '@/app/components/Button';
import CustomInput from '@/app/components/CustomInput';
import Title from '@/app/components/TitleandSubtitle';

import { validarNumero, validarTexto } from '@/app/validation/Address';

export default function NumeroComplementoBairro() {
  const { cep = '', cidade = '', endereco = '' } = useLocalSearchParams();

  const [numero, setNumero] = useState('');
  const [erroNumero, setErroNumero] = useState('');

  const [complemento, setComplemento] = useState('');
  const [erroComplemento, setErroComplemento] = useState('');

  const [bairro, setBairro] = useState('');
  const [erroBairro, setErroBairro] = useState('');

  const handleEnviar = () => {
    const numeroResult = validarNumero(numero);
    setErroNumero(numeroResult.erro);

    const complementoResult = validarTexto(complemento, 'complemento');
    setErroComplemento(complementoResult.erro);

    const bairroResult = validarTexto(bairro, 'bairro');
    setErroBairro(bairroResult.erro);

    if (numeroResult.valido && complementoResult.valido && bairroResult.valido) {
      router.push('/Screen/Home');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Title title="Cadastre-se" subtitle="Preencha o endereço" />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label="Número"
          placeholder="Digite o número da residência"
          value={numero}
          onChangeText={setNumero}
          keyboardType="numeric"
        />
        {erroNumero !== '' && <Text style={styles.errorText}>{erroNumero}</Text>}

        <CustomInput
          label="Complemento"
          placeholder="Ex: Casa, Apto"
          value={complemento}
          onChangeText={setComplemento}
        />
        {erroComplemento !== '' && <Text style={styles.errorText}>{erroComplemento}</Text>}

        <CustomInput
          label="Bairro"
          placeholder="Digite seu bairro"
          value={bairro}
          onChangeText={setBairro}
        />
        {erroBairro !== '' && <Text style={styles.errorText}>{erroBairro}</Text>}
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="Finalizar" onPress={handleEnviar} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  header: {
    marginBottom: 40,
  },
  inputContainer: {
    gap: 12,
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
