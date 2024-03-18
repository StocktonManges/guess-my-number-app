import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export default function InstructionText({ children, style }) {
  // If an array of style objects is used in the style prop, the styles
  // listed at the end of the array will override the styles at the
  // beginning of the array ("style" will override "instructionText").
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
