import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import color from "../config/color";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: color.primary,
    position: "absolute",
    top: 40,
    left: 10,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: color.secondary,
    position: "absolute",
    top: 40,
    right: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
