import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

const CustomButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: '#FBFDFF',
    padding: 15,
    width: 350,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton;
