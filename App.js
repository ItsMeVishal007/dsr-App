// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import Report from "./src/screens/Report";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "#f5f6fa",
      }}
      screenOptions={{
        tabBarStyle: {
          height: 70,
          backgroundColor: "#273c75",
        },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen
        options={{
          headerShown: true,
          title: "Report",
          tabBarIcon: () => <FontAwesome name='file' size={24} color='white' />,
          headerStyle: {
            backgroundColor: "#273c75",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name='Report'
        component={Report}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          title: "Profile",
          headerStyle: {
            backgroundColor: "#273c75",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: () => <FontAwesome name='user' size={24} color='white' />,
        }}
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen
            options={{ headerShown: false }}
            name='Login'
            component={Login}
          />
          <HomeStack.Screen
            options={{
              title: "Home",
            }}
            options={{ headerShown: false }}
            name='Home'
            children={MainScreen}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
