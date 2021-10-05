import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-elements";

const setStyle = (size) => {
  if (size === "small") {
    return {
      fontSize: 16,
    };
  }
  if (size === "medium") {
    return {
      fontSize: 20,
    };
  }
  if (size === "large") {
    return {
      fontSize: 26,
    };
  }
};

const DsrButton = ({ title, size, handlePress }) => {
  const styled = setStyle(size);
  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <Text style={{ ...styles.txt, ...styled }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DsrButton;

const styles = StyleSheet.create({
  btn: {
    fontSize: 20,
    backgroundColor: "#273c75",
    borderRadius: 5,
    paddingVertical: 8,
  },
  txt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
