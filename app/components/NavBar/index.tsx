import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BottomNavBar() {
  const pathname = usePathname();

  // Define a rota ativa com base na URL
  const active = pathname.includes('/Screen/User')
    ? 'profile'
    : pathname.includes('/Screen/Home')
    ? 'home'
    : 'qr';

  const RouterForHome = () => {
    router.push('/Screen/Home');
  };

  const RouterForUser = () => {
    router.push('/Screen/User');
  };

  const handleQrPress = () => {
    router.push('/Screen/Qr'); // ou a rota correta do QR Code, se existir
  };

  return (
    <>
      {/* Botão QR flutuante */}
      <TouchableOpacity style={styles.qrButton} onPress={handleQrPress}>
        <Ionicons
          name="qr-code-outline"
          size={28}
          color="#000"
        />
      </TouchableOpacity>
      <Text style={[
        styles.label,
        styles.qrLabel,
        active === 'qr' && styles.activeLabel
      ]}>
        QR Code
      </Text>

      {/* Barra de navegação inferior */}
      <View style={styles.container}>
        {/* Home */}
        <TouchableOpacity style={styles.tab} onPress={RouterForHome}>
          <MaterialIcons
            name="home"
            size={24}
            color={active === 'home' ? '#fff' : '#888'}
          />
          <Text style={[styles.label, active === 'home' && styles.activeLabel]}>
            Home
          </Text>
        </TouchableOpacity>

        {/* Espaço para o botão QR */}
        <View style={styles.tab} />

        {/* Profile */}
        <TouchableOpacity style={styles.tab} onPress={RouterForUser}>
          <AntDesign
            name="user"
            size={24}
            color={active === 'profile' ? '#fff' : '#888'}
          />
          <Text style={[styles.label, active === 'profile' && styles.activeLabel]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderTopWidth: 0.3,
    borderTopColor: '#222',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
  activeLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  qrButton: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    zIndex: 10,
    elevation: 5,
  },
  qrLabel: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    fontSize: 12,
  },
});
