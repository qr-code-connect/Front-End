import CustomButton from '@/app/components/Button';
import CustomInput from '@/app/components/CustomInput';
import Title from '@/app/components/TitleandSubtitle';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function EmailRegister() {
  const [nome, setNome] = useState('');
  const [erroNome, setErroNome] = useState('');

  const [telefone, setTelefone] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');

  const [cnpj, setCnpj] = useState('');
  const [erroCnpj, setErroCnpj] = useState('');

  // Validação nome
  const validarNome = (nome: string) => {
    const regex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
    if (!regex.test(nome.trim())) {
      setErroNome('Nome inválido');
      return false;
    }
    setErroNome('');
    return true;
  };

  // Formatação automática telefone (99) 99999-9999
  const formatarTelefone = (text: string) => {
    const nums = text.replace(/\D/g, '');

    let formatted = nums;
    if (nums.length > 2) {
      formatted = `(${nums.slice(0, 2)}) `;
      if (nums.length <= 6) {
        formatted += nums.slice(2);
      } else if (nums.length <= 10) {
        formatted += `${nums.slice(2, 7)}-${nums.slice(7, 11)}`;
      } else {
        formatted += `${nums.slice(2, 7)}-${nums.slice(7, 11)}`;
      }
    }
    return formatted;
  };

  // Validação telefone
  const validarTelefone = (telefone: string) => {
    const numeros = telefone.replace(/\D/g, '');
    if (numeros.length < 10 || numeros.length > 11) {
      setErroTelefone('Telefone inválido.');
      return false;
    }
    setErroTelefone('');
    return true;
  };

  // Formatação automática CNPJ (00.000.000/0000-00)
  const formatarCnpj = (text: string) => {
    let nums = text.replace(/\D/g, '');
    if (nums.length > 14) nums = nums.slice(0, 14);

    nums = nums
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');

    return nums;
  };

  // Validação CNPJ funcional
  const validarCnpj = (cnpj: string) => {
    const numeros = cnpj.replace(/\D/g, '');

    if (numeros.length !== 14) {
      setErroCnpj('CNPJ deve conter 14 dígitos.');
      return false;
    }

    // Validação algoritmo CNPJ
    const validarDigito = (cnpj: string, pos: number) => {
      const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

      const calc = (pesos: number[]) => {
        let soma = 0;
        for (let i = 0; i < pesos.length; i++) {
          soma += parseInt(cnpj.charAt(i)) * pesos[i];
        }
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
      };

      if (pos === 12) return calc(pesos1) === parseInt(cnpj.charAt(12));
      if (pos === 13) return calc(pesos2) === parseInt(cnpj.charAt(13));
      return false;
    };

    if (!validarDigito(numeros, 12) || !validarDigito(numeros, 13)) {
      setErroCnpj('CNPJ inválido.');
      return false;
    }

    setErroCnpj('');
    return true;
  };

  const validarTudo = () => {
    const nomeValido = validarNome(nome);
    const telefoneValido = validarTelefone(telefone);
    const cnpjValido = validarCnpj(cnpj);

    return nomeValido && telefoneValido && cnpjValido;
  };

  const [botaoAtivo, setBotaoAtivo] = useState(false);

  useEffect(() => {
    setBotaoAtivo(validarTudo());
  }, [nome, telefone, cnpj]);

  const handleEnviar = () => {
    if (validarTudo()) {
      router.push('/Screen/BusinessRegister/CEPandAdress');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Title title="Cadastre-se" subtitle="Digite seu nome, telefone e CNPJ!" />
      </View>

      <View style={styles.inputContainer}>
        

        <CustomInput
          label="Telefone"
          placeholder="(99) 99999-9999"
          value={telefone}
          keyboardType="phone-pad"
          onChangeText={(text) => setTelefone(formatarTelefone(text))}
        />
        {erroTelefone !== '' && <Text style={styles.errorText}>{erroTelefone}</Text>}

        <CustomInput
          label="CNPJ"
          placeholder="00.000.000/0000-00"
          value={cnpj}
          keyboardType="numeric"
          onChangeText={(text) => setCnpj(formatarCnpj(text))}
        />
        {erroCnpj !== '' && <Text style={styles.errorText}>{erroCnpj}</Text>}
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="Continuar" onPress={handleEnviar}/>
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
    marginBottom: 10,
  },
  inputContainer: {
    gap: 1,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    marginBottom: 8,
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 41,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
