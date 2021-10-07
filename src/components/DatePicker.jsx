import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import { MaterialIcons } from "@expo/vector-icons";
import Spacer from "./Spacer";

const MyDatePicker = ({label}) => {
  const [date, setDate] = useState("2016-05-15");

  return (
    <View>
      <Spacer>
        <Text h4 style={{ color: "#353b48" }}>
          {label}
        </Text>
      </Spacer>
      <DatePicker
        style={{ width: "auto", borderWidth: 1, borderColor: "grey" }}
        date={date}
        // showIcon={false}
        iconComponent={
          <MaterialIcons name='date-range' size={24} color='black' />
        }
        mode='date'
        placeholder='select date'
        format='YYYY-MM-DD'
        minDate='2002-05-01'
        maxDate='2072-06-01'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            borderWidth: 0,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
    </View>
  );
};

export default MyDatePicker;

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
  },
});
