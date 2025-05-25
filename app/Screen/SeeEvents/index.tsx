import FilterInput from "@/app/components/FilterInput";
import InputEvent from "@/app/components/InputEvent";
import Title from "@/app/components/TitleandSubtitle";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Shows() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={40} color="white" />
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView style={styles.contentContainer}>
        <Title title="Shows" subtitle="Onde será seu rolê hoje 🎉" />
        <View style={styles.filterWrapper}>
          <FilterInput title="Pesquise por shows" />
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.section}>
        <Text style={styles.sectionTitle}>Destaque</Text>
      </SafeAreaView>

      <InputEvent title="30 PRA UM"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  backButtonContainer: {
    padding: 20,
    paddingTop: 40,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  filterWrapper: {
    marginTop: 20,
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
});
