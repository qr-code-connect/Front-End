import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ProfilePhoto() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.status !== 'granted') {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={pickImage}>
        <Image
          source={
            image
              ? { uri: image }
              : require('@/assets/imagem/user.jpg') // fallback opcional
          }
          style={styles.image}
          resizeMode="cover"
         
        />
      </ TouchableOpacity>
        <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
          <MaterialIcons name="add-a-photo" color="black" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center', // Centraliza horizontalmente
  },
  imageWrapper: {
    position: 'relative',
    width: 170,
    height: 170,
    marginTop: 46,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 2,
    right: 10,
    borderColor: '#fff',
  },
  iconButton: {
    position: 'absolute',
    bottom: 30,
    right: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 6,
    elevation: 5,
  },
});
