import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 20,
    // BOX SHADOW
    elevation: 6, // Android
    shadowColor: "black", // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.5, // iOS
  },
});
