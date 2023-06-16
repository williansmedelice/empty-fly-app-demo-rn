import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";

function TextInput({ typeInput = "text", ...props }) {
  const [iconSelect, setIconSelect] = useState("eye-slash");
  const [typePassword, setTypePassword] = useState(true);

  if (typeInput === "text") {
    return (
      <Input
        placeholderTextColor={"white"}
        cursorColor={"white"}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        leftIconContainerStyle={styles.leftIconContainerStyle}
        rightIconContainerStyle={styles.rightIconContainerStyle}
        errorStyle={styles.errorStyle}
        {...props}
      />
    );
  }
  if (typeInput === "password") {
    return (
      <Input
        placeholderTextColor={"white"}
        cursorColor={"white"}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        leftIconContainerStyle={styles.leftIconContainerStyle}
        rightIconContainerStyle={styles.rightIconContainerStyle}
        errorStyle={styles.errorStyle}
        // leftIcon={<FontAwesome name="lock" size={20} />}
        rightIcon={
          <TouchableOpacity
            style={styles.stBtn1}
            onPress={() => {
              setTypePassword(!typePassword);
              if (iconSelect === "eye") {
                setIconSelect("eye-slash");
              } else {
                setIconSelect("eye");
              }
            }}
          >
            <FontAwesome name={iconSelect} color={"white"} size={20} />
          </TouchableOpacity>
        }
        secureTextEntry={typePassword}
        {...props}
      />
    );
  }
  if (typeInput === "textStyle1") {
    return (
      <Input
        placeholderTextColor={"black"}
        cursorColor={"black"}
        inputContainerStyle={styles.inputContainerStyle1}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        leftIconContainerStyle={styles.leftIconContainerStyle}
        rightIconContainerStyle={styles.rightIconContainerStyle}
        errorStyle={styles.errorStyle}
        {...props}
      />
    );
  }
  if (typeInput === "passwordStyle1") {
    return (
      <Input
        placeholderTextColor={"black"}
        cursorColor={"black"}
        inputContainerStyle={styles.inputContainerStyle1}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        leftIconContainerStyle={styles.leftIconContainerStyle}
        rightIconContainerStyle={styles.rightIconContainerStyle}
        errorStyle={styles.errorStyle}
        {...props}
      />
    );
  }
}

export default TextInput;

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderBottomColor: "#fff",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    // borderBottomWidth: 0,
    // backgroundColor: "#fff",
    // borderRadius: 50,
  },
  inputContainerStyle1: {
    borderColor: "#d9d9d9",
    color: "#fff",
    height: 50,
    // textShadowColor: "rgba(0, 0, 0, 0.75)",
    // textShadowOffset: { width: -1, height: 1 },
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  inputStyle: {
    marginLeft: 10,
    marginRight: 10,
    color: "white",
  },
  labelStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 5,
  },
  rightIconContainerStyle: {
    marginRight: 10,
  },
  leftIconContainerStyle: {
    marginLeft: 10,
  },
  errorStyle: {
    marginLeft: 10,
  },
  stBtn1: {
    // backgroundColor: "black",
    width: 40,
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
