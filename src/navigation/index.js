import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

function RootNavigation() {
  return (
    <>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </>
  );
}

export default RootNavigation;
