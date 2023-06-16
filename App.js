import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigation from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootNavigation />
    </>
  );
}
