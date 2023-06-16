import { ImageBackground, StyleSheet, View } from "react-native";
import imageBackground from "../../assets/img/rectangle.png";

function LayoutBackgroundImage({ children }) {
  return (
    <ImageBackground
      source={imageBackground}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
}

export default LayoutBackgroundImage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
