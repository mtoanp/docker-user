import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Settings from "../screens/Settings/Settings";
import AuthStack from "../screens/auth/AuthStack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ------------------------------------------------------------------------------------
// TabNavigator: Alternative to NavBar
// ------------------------------------------------------------------------------------
export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Hide default headers if using a custom header
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />

      {/* Nested Route Stack */}
      <Tab.Screen name="AuthStack" component={AuthStack} />
    </Tab.Navigator>
  );
}

// ------------------------------------------------------------------------------------
// MainStackNavigator
// ------------------------------------------------------------------------------------
export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Using TabBar */}
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator} // used TabNavigator as a screen
      />
      {/* Screen that declared in TabNavigator, no need to add here */}

      {/* Common routes */}
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
