import { StyleSheet } from "react-native";
import { Button as RNEButton } from "@rneui/themed";

function Button({ ...props }) {
  return <RNEButton titleStyle={styles.titleStyle} {...props} />;
}

export default Button;

const styles = StyleSheet.create({
  titleStyle: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    fontWeight: "bold",
  },
});
