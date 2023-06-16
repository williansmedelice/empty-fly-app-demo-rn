import { StyleSheet, View } from "react-native";

function LayoutPadding({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default LayoutPadding;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: "white",
  },
});
