// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Report from "./src/pages/Report";
import Login from "./src/pages/Login";
import Profile from "./src/pages/Profile";

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
          height: 80,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          title: "Report",
        }}
        name='Report'
        component={Report}
      />
      <Tab.Screen
        options={{
          headerShown: false,

          title: "Profile",
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
