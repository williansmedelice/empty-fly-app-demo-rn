import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//** Screens
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import RecoveryPasswordScreen from "../screens/auth/RecoveryPasswordScreen";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="RecoverPasswordScreen"
        component={RecoveryPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
