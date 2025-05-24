import CustomButton from '@/app/components/Button';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone do olho
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomInput from '../../components/CustomInput';


const RegisterPass = () => {
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [senhaValida, setSenhaValida] = useState(false); // Estado para validação das senhas
  const [error, setError] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmSenha, setMostrarConfirmSenha] = useState(false);

 const handleSubmit = () => {
  if (senha !== confirmSenha) {
    setSenhaValida(false);
    setError('As senhas não coincidem');
  } else if (senha.length < 6 || confirmSenha.length < 6) {
    setSenhaValida(false);
    setError('A senha deve ter pelo menos 6 caracteres');
  } else {
    setSenhaValida(true);
    setError('');
    router.push('/Screen/Login'); // Altere para o destino correto
  }
};

  const toggleSenhaVisibility = () => setMostrarSenha((prev) => !prev);
  const toggleConfirmSenhaVisibility = () => setMostrarConfirmSenha((prev) => !prev);

  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="left" size={35} color="white" />
      </TouchableOpacity>


      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Digite sua senha</Text>

      <View style={styles.inputContainer}>
        <CustomInput
          label="Senha"
          placeholder="**********"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
        />
        <TouchableOpacity onPress={toggleSenhaVisibility} style={styles.eyeIcon}>
          <Ionicons
            name={mostrarSenha ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label="Confirmar Senha"
          placeholder="**********"
          value={confirmSenha}
          onChangeText={setConfirmSenha}
          secureTextEntry={!mostrarConfirmSenha}
        />
        <TouchableOpacity onPress={toggleConfirmSenhaVisibility} style={styles.eyeIcon}>
          <Ionicons
            name={mostrarConfirmSenha ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
            style={styles.icon}
            
          />
        </TouchableOpacity>
      </View>

      {!senhaValida && <Text style={styles.errorText}>{error}</Text>}


        <View style={styles.button}>
        <CustomButton title="Criar conta" onPress={handleSubmit} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta? Faça login.</Text>
      </View>
    </View>
  );
};

export default RegisterPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 25,
    justifyContent: 'center',
  },
   backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 24,
  },
  label: {
    color: '#ccc',
    marginBottom: 4,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  footerText: {
    color: '#ccc',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 34,
  },
  icon: {
    top: 15,
  }
});
