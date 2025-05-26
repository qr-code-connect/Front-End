import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CustomButton from '@/app/components/Button';
import CustomInput from '@/app/components/CustomInput';
import Title from '@/app/components/TitleandSubtitle';

import { formatarCep, formatarCidade, validarCep, validarTexto } from '@/app/validation/Address';

export default function CepCidadeEndereco() {
  const [cep, setCep] = useState('');
  const [erroCep, setErroCep] = useState('');

  const [cidade, setCidade] = useState('');
  const [erroCidade, setErroCidade] = useState('');

  const [endereco, setEndereco] = useState('');
  const [erroEndereco, setErroEndereco] = useState('');

  const handleNext = () => {
    const cepResult = validarCep(cep);
    setErroCep(cepResult.erro);

    const cidadeResult = validarTexto(cidade, 'cidade');
    setErroCidade(cidadeResult.erro);

    const enderecoResult = validarTexto(endereco, 'endereço');
    setErroEndereco(enderecoResult.erro);

    if (cepResult.valido && cidadeResult.valido && enderecoResult.valido) {
      router.push({
        pathname: '/Screen/BusinessRegister/NumberAndCity',
        params: { cep, cidade, endereco },
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Title title="Cadastre-se" subtitle="Preencha seu endereço" />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label="CEP"
          placeholder="Insira seu CEP"
          value={cep}
          onChangeText={(text) => setCep(formatarCep(text))}
        />
        {erroCep !== '' && <Text style={styles.errorText}>{erroCep}</Text>}

        <CustomInput
          label="Cidade"
          placeholder="Digite sua cidade"
          value={cidade}
          onChangeText={(text) => setCidade(formatarCidade(text))}
        />
        {erroCidade !== '' && <Text style={styles.errorText}>{erroCidade}</Text>}

        <CustomInput
          label="Endereço"
          placeholder="Digite seu endereço (rua)"
          value={endereco}
          onChangeText={setEndereco}
        />
        {erroEndereco !== '' && <Text style={styles.errorText}>{erroEndereco}</Text>}
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="Próximo" onPress={handleNext} />
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
