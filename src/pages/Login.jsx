import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { Entypo } from "@expo/vector-icons";
import Input from "../components/Input";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Button, Text } from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView
      style={styles.mainRoot}
      edges={["top", "right", "left", "bottom"]}
    >
      <View style={styles.Login}>
        <Image
          style={styles.Logo}
          source={require("../assets/Images/logo.png")}
        />

        <View style={styles.InputParent}>
          <Input placeholder='Email' Icon='email' />
          <Input placeholder='Password' Icon='key' />
        </View>
        <Button title='Login' style={styles.btn} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
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
    height: 350,
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
