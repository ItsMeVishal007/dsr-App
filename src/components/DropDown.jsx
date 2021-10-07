import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
// import { Text } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
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
  const [DropDownLabel, setDropDownLabel] = useState("Select Project");
  return (
    <Spacer>
      <View>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            setIsClicked((previousData) => !previousData);
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#353b48" }}>
            {DropDownLabel}
          </Text>
          <AntDesign name='caretdown' size={18} color='black' />
        </TouchableOpacity>
        <FlatList
          style={{
            paddingVertical: 7,
            borderWidth: 2,
            borderColor: "grey",
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            borderTopWidth: 0,
          }}
          data={Projects}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ paddingVertical: 8, paddingHorizontal: 6 }}
              onPress={() => {
                setDropDownLabel(item.name);
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#353b48" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </Spacer>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    borderColor: "grey",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  options: {
    paddingVertical: 4,
  },
});
