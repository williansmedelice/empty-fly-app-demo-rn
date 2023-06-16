import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Button from "../../components/Button";
import LayoutBackgroundImage from "../../components/LayoutBackgroundImage";
import TextInput from "../../components/TextInput";

function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <LayoutBackgroundImage>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "bold",
              textShadowColor: "rgba(0, 0, 0, 0.75)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            Registrarse
          </Text>
        </View>
        <View style={{ flex: 5, width: "100%" }}>
          <TextInput
            placeholder="Usuario"
            leftIcon={<Entypo name="user" color={"white"} size={20} />}
          />
          <TextInput
            placeholder="E-mail"
            leftIcon={<Entypo name="mail" color={"white"} size={20} />}
          />
          <TextInput
            placeholder="Contraseña"
            typeInput="password"
            leftIcon={<FontAwesome name="lock" color={"white"} size={20} />}
          />
          <TextInput
            placeholder="Confirmar Contraseña"
            typeInput="password"
            leftIcon={<FontAwesome name="lock" color={"white"} size={20} />}
          />
        </View>
        <View style={{ width: "100%" }}>
          <View style={{ marginVertical: 10 }}>
            <Button
              title="Registrar"
              size="lg"
              onPress={() => navigation.replace("SignInScreen")}
              buttonStyle={{ borderRadius: 10 }}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button
              title="Cancelar"
              type="clear"
              size="lg"
              titleStyle={{
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 1,
                fontWeight: "bold",
                color: "white",
              }}
              onPress={() => navigation.replace("SignInScreen")}
            />
          </View>
        </View>
      </View>
    </LayoutBackgroundImage>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
  },
});
