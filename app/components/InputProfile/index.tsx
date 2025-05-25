import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function InputProfile({ title, onPress }: Props) {
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
    backgroundColor: "transparent",
    borderRadius: 8,
    borderColor: 'white',
    alignItems: "center",
    justifyContent: 'center',
    margin: 1,
    borderWidth: 2,
    height: 60,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  Pad: {
    paddingTop: 17,
  }
});
