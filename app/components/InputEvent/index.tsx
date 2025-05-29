import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  type: string;
  price: number;
  date: string;
}

const InputEvent: React.FC<Props> = ({ title, type, price, date }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push({ pathname: "/Screen/EventDetails/index", params: { title, type, price, date } })}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.more}>mais sobre</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  more: {
    color: "blue",
    textAlign: "right",
  },
});

export default InputEvent;
