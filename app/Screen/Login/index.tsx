import CustomButton from '@/app/components/Button';
import CustomInput from '@/app/components/CustomInput';
import Title from '@/app/components/TitleandSubtitle';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

const buttonOnpress = () => {
  router.push('./Home')
}

const goToRegister = () => {
  router.push('/Screen/RegisterScreen/email');
};

  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <Title title='Entrar' subtitle='Acesse sua conta!' />
      </View>

      <View style={styles.inputContainer}>
        <CustomInput 
        label='Email' 
        placeholder='Ex: usuario@gmail.com' 
        value={email} 
        onChangeText={setSenha}
        />

        <CustomInput 
        label='Senha' 
        placeholder='**********' 
        value={senha}  secureTextEntry 
        onChangeText={setEmail}
        />
        
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
      <CustomButton title="Entrar" onPress={buttonOnpress}/>
      </View>
     <TouchableOpacity style={styles.footerContainer} onPress={goToRegister}>
      <Text style={styles.footerText}>
        Não possui uma conta?{' '}
        <Text style={styles.link}>Cadastre-se</Text>
      </Text>
    </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    marginBottom: 40,
  },
  inputContainer: {
    gap: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  button: {
    marginTop: 30,
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
  footerContainer: {
  marginTop: 40,
  alignItems: 'center',
},
  text: {
    color: 'white',
  }
});
