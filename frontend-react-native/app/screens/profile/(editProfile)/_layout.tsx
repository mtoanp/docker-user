import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

const EditProfileLayout = () => {
  return (
    <View className="flex-1 bg-white">
      {/* <Header className="bg-gray-200" /> Adjust header styling as needed */}
      <View className="flex-1">
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
          }}
        >
          <Tabs.Screen
            name="Step1"
            options={{
              title: "Step 1",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "egg" : "egg-outline"}
                  color={color}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="Step2"
            options={{
              title: "Step 2",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "egg" : "egg-outline"}
                  color={color}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="Step3"
            options={{
              title: "Step 3",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "egg" : "egg-outline"}
                  color={color}
                />
              ),
            }}
          />
        </Tabs>
      </View>
      {/* <Footer className="bg-gray-200" /> Adjust footer styling as needed */}
    </View>
  );
};

export default EditProfileLayout;

const styles = StyleSheet.create({
  tabBar: {
    height: 60, // Adjust height
    paddingVertical: 5,
  },
  tabBarLabel: {
    fontSize: 12, // Adjust font size
    fontWeight: "bold",
    // color: "#0a7ea4",
  },
});
