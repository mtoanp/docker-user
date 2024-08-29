import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreens";
import DetailsScreen from "../screens/DetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ------------------------------------------------------------------------------------
// TabNavigator
// ------------------------------------------------------------------------------------
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide default headers if using a custom header
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

// ------------------------------------------------------------------------------------
// MainStackNavigator
// ------------------------------------------------------------------------------------
export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator} // used TabNavigator as a screen
        options={{ headerShown: false }}
      />
      {/* Screen that declared in TabNavigator, no need to add here */}

      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
