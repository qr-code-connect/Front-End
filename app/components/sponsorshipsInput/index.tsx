import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Patrocinio from '../../../assets/imagem/Patrocinio.jpg';

export default function SponsorInput() {
  return (
    <View style={styles.container}> 
      <TouchableOpacity> 
        <Image source={Patrocinio} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 25,
  },
  image: {
    width: 370,
    height: 110,
    borderRadius: 10,
  },
});
