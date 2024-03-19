import { Text, StyleSheet, Platform } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // In order to change styling based on the platform, the "select"
    // method on the "Platform" API can be used or a ternary statement
    // can be used based on the "OS" property on the "Platform" API.

    // Alternatively, adding ".android.js" or ".ios.js" as the file
    // extension and then putting the platform specific code in each
    // file will achieve the same result. When the app is run,
    // react-native will choose which file type to use automatically so
    // the file should still be imported without the file extensions.

    // borderWidth: Platform.OS === "android" ? 2 : 0, borderWidth:
    // Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
