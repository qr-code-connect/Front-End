import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

interface Props {
  title: string;
}

const FilterInput: React.FC<Props> = ({ title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.filterRow}>
        <View style={styles.container}>
          <MaterialIcons name="search" color="white" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={title}
            placeholderTextColor="#aaa"
          />
        </View>
        <MaterialIcons name="filter-alt" color="white" size={30} style={styles.filter} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    height: 45,
    flex: 1,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    color: "#fff",
    flex: 1,
  },
  filter: {
    marginLeft: 10,
  },
});

export default FilterInput;
