import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function InputMain({ title, onPress }: Props) {
  return (
    <View style={styles.Pad}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    margin: 1,
    height: 70,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  Pad: {
    paddingTop: 15,
  }
});
