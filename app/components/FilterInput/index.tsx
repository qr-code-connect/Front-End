import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
}

const FilterInput: React.FC<Props> = ({ title, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" color="white" size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={title}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    height: 40,
    flex: 1,
  },
  icon: {
    marginRight: 6,
  },
  input: {
    color: "#fff",
    flex: 1,
    fontSize: 14,
  },
});

export default FilterInput;
