import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainRoot: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    marginBottom: 200,
  },
  Login: {
    display: "flex",
    justifyContent: "space-around",
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 370,
  },
  Logo: {
    height: 70,
    width: 280,
    alignSelf: "center",
  },
  InputParent: {
    display: "flex",
    height: 120,
    justifyContent: "space-between",
  },
});
