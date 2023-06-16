import { Image, StyleSheet } from "react-native";
import logo from "../../assets/img/logo.png";

function Logo() {
  return <Image source={logo} style={styles.image} />;
}

export default Logo;

const styles = StyleSheet.create({
  image: {
    width: 194,
    height: 243,
    marginBottom: 8,
  },
});
