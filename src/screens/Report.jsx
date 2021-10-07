import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DatePicker from "../components/DatePicker";
import DropDown from "../components/DropDown";
import TextArea from "../components/TextArea";

const Report = () => {
  return (
    <SafeAreaView style={styles.mainRoot} edges={["right", "left", "bottom"]}>
      <View style={styles.ReportContainer}>
        <TouchableOpacity>
          <DatePicker label={"Select Date"} />
        </TouchableOpacity>
        <DropDown />
        <TextArea />
      </View>
    </SafeAreaView>
  );
};

export default Report;

const styles = StyleSheet.create({
  mainRoot: {
    marginHorizontal: 10,
    marginTop: 10,
    // borderColor: "red",
    // borderWidth: 2,
  },
});
