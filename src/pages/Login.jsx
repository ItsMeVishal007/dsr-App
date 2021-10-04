import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { Button, Text } from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 25,
        marginBottom: 200,
      }}
      edges={["top", "right", "left", "bottom"]}
    >
      <View style={styles.Login}>
        <Image
          style={styles.Logo}
          source={require("../assets/Images/logo.png")}
        />

        <View style={styles.InputParent}>
          <View style={styles.inputContainer}>
            <TextInput placeholder='Email' style={styles.input} />
            <MaterialCommunityIcons name='email' size={24} color='black' />
          </View>

          <View style={styles.inputContainer}>
            <TextInput placeholder='Password' style={styles.input} />
            <Entypo name='lock' size={24} color='black' />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
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
