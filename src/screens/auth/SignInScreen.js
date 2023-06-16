import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SocialIcon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import LayoutBackgroundImage from "../../components/LayoutBackgroundImage";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

function SignInScreen() {
  const navigation = useNavigation();

  return (
    <LayoutBackgroundImage>
      <View style={styles.container}>
        <Animatable.View animation="bounceIn" duraton="1500">
          <Logo />
        </Animatable.View>
        <ScrollView style={styles.scrollView}>
          <TextInput placeholder="Usuario" />
          <TextInput placeholder="Contraseña" typeInput="password" />
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.replace("RecoverPasswordScreen")}
            >
              <Text style={styles.forgot}>Olvido su contraseña?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", paddingHorizontal: 20 }}>
            <Button title="LOGIN" />
          </View>
          <View
            style={{
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.textSt1}>
              Use las redes sociales para iniciar sesión
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <SocialIcon
              style={{
                backgroundColor: "white",
              }}
              iconColor={"skyblue"}
              underlayColor={"#777"}
              onPress={() => {}}
              type="google"
            />
            <SocialIcon
              style={{ backgroundColor: "white" }}
              iconColor={"skyblue"}
              underlayColor={"#777"}
              onPress={() => {}}
              type="apple"
            />
            <SocialIcon
              style={{ backgroundColor: "white" }}
              iconColor={"skyblue"}
              underlayColor={"#777"}
              onPress={() => {}}
              type="facebook"
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.textSt1}>No tienes una cuenta? </Text>
            <TouchableOpacity
              onPress={() => navigation.replace("SignUpScreen")}
            >
              <Text style={[styles.link, styles.textSt1]}>Registrate</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </LayoutBackgroundImage>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 20,
    marginEnd: 40,
  },
  forgot: {
    fontSize: 16,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  textSt1: {
    color: "#fff",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  scrollView: {
    width: "100%",
  },
});
