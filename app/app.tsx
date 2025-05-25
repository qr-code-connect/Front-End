import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import Introduction from './Screen/Introduction';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Introduction /> 
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
 