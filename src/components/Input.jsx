import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Input = ({ placeholder, Icon }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder={placeholder} style={styles.input} />
      <MaterialCommunityIcons name={Icon} size={24} color='black' />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#b2bec3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    height: 50,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
  },
});
