import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Button from "../../components/Button";
import LayoutBackgroundImage from "../../components/LayoutBackgroundImage";
import TextInput from "../../components/TextInput";
import Logo from "../../components/Logo";

function RecoveryPasswordScreen() {
  const navigation = useNavigation();

  return (
    <LayoutBackgroundImage>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo />
        </View>
        <View style={{ marginVertical: 30, justifyContent: "center", alignItems:"center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            Olvido su contraseña?
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              // fontWeight: "bold",
              // textShadowColor: "rgba(0, 0, 0, 0.75)",
              // textShadowOffset: { width: -1, height: 1 },
              // textShadowRadius: 1,
            }}
          >
            Introduzca el correo electrónico asociado a su cuenta a continuación
            y le enviaremos un nuevo enlace.
          </Text>
        </View>
        <View style={{ flex: 5, width: "100%" }}>
          <TextInput
            placeholder="Ingrese un correo electrónico"
            leftIcon={<Entypo name="mail" color={"white"} size={20} />}
          />
          <View style={{ width: "100%" }}>
            <View style={{ marginVertical: 10 }}>
              <Button
                title="Enviar"
                size="lg"
                onPress={() => navigation.replace("SignInScreen")}
                buttonStyle={{ borderRadius: 10 }}
              />
            </View>
          </View>
        </View>
      </View>
    </LayoutBackgroundImage>
  );
}

export default RecoveryPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
  },
});
