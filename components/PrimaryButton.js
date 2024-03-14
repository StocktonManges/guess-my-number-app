import { View, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: "fit-content",
    borderRadius: 8,
    overflow: "hidden",
    margin: 5,
  },
  button: {
    height: "fit-content",
    backgroundColor: "cyan",
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: "center",
  },
});
