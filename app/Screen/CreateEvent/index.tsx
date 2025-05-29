import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CustomButton from '@/app/components/Button';
import CustomInput from '@/app/components/CustomInput';
import Title from '@/app/components/TitleandSubtitle';

export default function CreateEvent() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [tipo, setTipo] = useState('');
  const [valorIngresso, setValorIngresso] = useState('');

  const [errors, setErrors] = useState({
    nome: '',
    descricao: '',
    data: '',
    tipo: '',
    valorIngresso: '',
  });

  const handleDateChange = (text: string) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

    let formatted = cleaned;
    if (cleaned.length >= 5) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    } else if (cleaned.length >= 3) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }

    setData(formatted);
  };

  const validate = () => {
    const newErrors: any = {};

    if (!nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!descricao.trim()) newErrors.descricao = 'Descrição é obrigatória';

    const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!data.trim()) newErrors.data = 'Data é obrigatória';
    else if (!dataRegex.test(data)) newErrors.data = 'Formato inválido (DD/MM/AAAA)';

    if (!tipo) newErrors.tipo = 'Tipo é obrigatório';

    if (!valorIngresso.trim()) {
      newErrors.valorIngresso = 'Valor do ingresso é obrigatório';
    } else {
      const valorFormatado = valorIngresso.replace(',', '.');
      if (isNaN(Number(valorFormatado))) {
        newErrors.valorIngresso = 'Valor inválido';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      if (tipo === 'show') {
        router.push({
          pathname: '/Screen/Home',
          params: {
            nome,
            descricao,
            data,
            tipo,
            valorIngresso,
          },
        });
      } else {
        router.push('/Screen/Home'); // Redireciona para home caso não seja show
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={32} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Title title="Crie seu evento" subtitle="Preencha as informações do evento" />

        <CustomInput
          label="Nome do Evento"
          placeholder="Digite o nome"
          value={nome}
          onChangeText={(text) => {
            setNome(text);
            if (errors.nome) setErrors({ ...errors, nome: '' });
          }}
        />
        {errors.nome ? <Text style={styles.error}>{errors.nome}</Text> : null}

        <CustomInput
          label="Descrição"
          placeholder="Digite a descrição"
          value={descricao}
          onChangeText={(text) => {
            setDescricao(text);
            if (errors.descricao) setErrors({ ...errors, descricao: '' });
          }}
        />
        {errors.descricao ? <Text style={styles.error}>{errors.descricao}</Text> : null}

        <CustomInput
          label="Data"
          placeholder="DD/MM/AAAA"
          value={data}
          onChangeText={(text) => {
            handleDateChange(text);
            if (errors.data) setErrors({ ...errors, data: '' });
          }}
          keyboardType="numeric"
          maxLength={10}
        />
        {errors.data ? <Text style={styles.error}>{errors.data}</Text> : null}

        <CustomInput
  label="Valor do Ingresso (R$)"
  placeholder="R$ 0,00"
  value={valorIngresso ? `R$ ${valorIngresso}` : ''}
  onChangeText={(text) => {
    let cleaned = text.replace(/[^0-9,\.]/g, '');

    cleaned = cleaned.replace(/\./g, ',');

    const parts = cleaned.split(',');
    if (parts.length > 2) {
      cleaned = parts[0] + ',' + parts[1];
    }

    setValorIngresso(cleaned);

    if (errors.valorIngresso) setErrors({ ...errors, valorIngresso: '' });
  }}
  keyboardType="numeric"
/>

        <View style={styles.pickerContainer}>
          <Text style={styles.txt}>Selecione o tipo do evento</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={tipo}
              onValueChange={(itemValue) => {
                setTipo(itemValue);
                if (errors.tipo) setErrors({ ...errors, tipo: '' });
              }}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item label="Selecione o tipo..." value="" />
              <Picker.Item label="Show" value="show" />
              <Picker.Item label="Stand-up" value="standup" />
              <Picker.Item label="Jantar" value="jantar" />
              <Picker.Item label="Balada" value="balada" />
            </Picker>
          </View>
          {errors.tipo ? <Text style={styles.error}>{errors.tipo}</Text> : null}
        </View>

        <View style={styles.button}>
          <CustomButton title="Criar" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
  },
  content: {
    paddingTop: 80,
    gap: 16,
  },
  pickerContainer: {
    marginTop: 10,
  },
  pickerWrapper: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  picker: {
    color: '#fff',
    height: 58,
    paddingHorizontal: 16,
  },
  button: {
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#ccc',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 17,
  },
  error: {
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
    marginLeft: 4,
    fontSize: 14,
  },
});
