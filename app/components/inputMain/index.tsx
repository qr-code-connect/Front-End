import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  onPress?: () => void; 
  isActive?: boolean;   
}

export default function InputMain({ title, onPress, isActive }: Props) {
  return (
    <View style={styles.Pad}>
      <TouchableOpacity
        style={[styles.container, isActive && styles.active]}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc", 
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    margin: 1,
    height: 70,
  },
  active: {
    backgroundColor: "#fff", 
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
