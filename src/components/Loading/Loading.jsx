import React from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function SimpleLottie({ props }) {
  const { width, height } = useWindowDimensions();

  const isLoading = useSelector(state => state.general.isLoading)

  if (!isLoading) return null;
  return (
    <View style={{ height: height, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={require("../../../assets/sleep-cat.json")}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});