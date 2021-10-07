import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "./Spacer";

const Projects = [
  {
    name: "Proscore",
  },
  {
    name: "Incognito scout",
  },
  {
    name: "Daily status Report",
  },
  {
    name: "Lit Fiber",
  },
];

const DropDown = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Spacer>
      <View>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            setIsClicked((previousData) => !previousData);
          }}
        >
          <Text h4 style={{ color: "#353b48" }}>
            Select Project
          </Text>
        </TouchableOpacity>
        <FlatList
          data={Projects}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.name}
        />
      </View>
    </Spacer>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: "blue",
    borderWidth: 1,
    paddingVertical: 5,
  },
  options: {
    paddingVertical: 4,
  },
});
