import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Input from "../components/Input";
import DsrButton from "../components/Button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/Login";

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
        <DsrButton title='Login' size='large' />
      </View>
    </SafeAreaView>
  );
};

export default Login;