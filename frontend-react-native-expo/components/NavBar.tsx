import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { usePathname } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";

const NavBar = () => {
  const colorScheme = useColorScheme();
  const pathname = usePathname(); // Get the current pathname

  // Define an array of paths where the tab bar should be hidden
  const routesWithNoTabBar = ["screens/profile/"];

  // Determine if the tab bar should be hidden based on the routes array
  const noTabBar = routesWithNoTabBar.some((route) => pathname.includes(route));

  console.log(pathname, noTabBar);

  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        tabBarStyle: {
          display: noTabBar ? "none" : "flex", // Hide tab bar conditionally
        },
      }}
    >
      <Tabs.Screen
        name="screens/Home" // Ensure this is the correct path
        options={{
          title: "Home",
          // headerStyle: { backgroundColor: "red" },
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="screens/profile" // Ensure this is the correct path
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }} // Adjust as needed
      />

      <Tabs.Screen
        name="screens/Search" // Ensure this is the correct path
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* Add more screens here if needed */}
    </Tabs>
  );
};

export default NavBar;
