import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PrimaryButton({ children }) {
  const pressHandler = () => {};
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? // If pressed, use default buttonInnerContainer styles AND the pressed styles.
              [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  // This is to show feedback on iOS after the button is pressed since
  // the "android_ripple" prop only works on androids.
  pressed: {
    opacity: 0.75,
  },
});
