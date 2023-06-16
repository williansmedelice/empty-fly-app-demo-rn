import { View, StyleSheet } from "react-native";

function LayoutBackground({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default LayoutBackground;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#c30011",
    flex: 1,
  },
});
