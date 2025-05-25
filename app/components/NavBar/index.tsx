import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BottomNavBar() {
  const RouterForHome = () => {
    router.push('/Screen/Home')
  }
   const RouterForUser = () => {
    router.push('/Screen/User')
  }
  

  const [active, setActive] = useState('qr');

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity style={styles.tab} onPress={() => setActive('home')}>
        <MaterialIcons
          name="home"
          size={24}
          color={active === 'home' ? '#fff' : '#888'}
          onPress={RouterForHome}
        />
        <Text style={[styles.label, active === 'home' && styles.activeLabel]}>Home</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.qrButton}
        onPress={() => setActive('qr')}
      >
        <Ionicons
          name="qr-code-outline"
          size={28}
          color={active === 'qr' ? '#000' : '#000'}
          
        />
        
      </TouchableOpacity>
      <Text style={[
    styles.label,
    styles.qrLabel,
    active === 'qr' && styles.activeLabel
  ]}>
        QR Code
      </Text>

      {/* Profile */}
      <TouchableOpacity style={styles.tab} onPress={() => setActive('profile')}>
        <AntDesign
          name="user"
          size={24}
          color={active === 'profile' ? '#fff' : '#888'}
          onPress={RouterForUser}
        />
        <Text style={[styles.label, active === 'profile' && styles.activeLabel]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
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
    top: -25,
    alignSelf: 'center',
    zIndex: 10,
    elevation: 5,
  },
  qrLabel: {
    position: 'absolute',
    bottom: 18,
    alignSelf: 'center',
    fontSize: 12,
  },
});
