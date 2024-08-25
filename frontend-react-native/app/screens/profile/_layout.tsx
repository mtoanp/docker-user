import React, { useCallback } from "react";
import { Stack, useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.navigate("index")}
        // onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50, // Set your desired height
    backgroundColor: "red", // Background color of the header
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginLeft: 10,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    color: "yellow", // Color of the title text
  },
});

const ProfileLayout = () => {
  // RESET DEFAULT initialRouteName
  // const router = useRouter(); // Get the router to manipulate navigation

  // useFocusEffect(
  //   useCallback(() => {
  //     // Reset to the "index" screen whenever the tab is focused
  //     router.replace("screens/profile"); // Reset route to the profile's index
  //   }, [router])
  // );

  return (
    <>
      <Stack
        initialRouteName="index"
        screenOptions={
          {
            // headerShown: false,
            // header: () => <CustomHeader title="Profile" />, // Use the custom header
            // headerStyle: { backgroundColor: "red", height: 50 }, // Customize header style
            // headerTitleStyle: { fontSize: 18, color: "yellow" }, // Customize title style
            // headerTintColor: "white", // Customize title color
          }
        }
      >
        {/* Set the initial route */}
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Profile",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(editProfile)"
          options={{
            // headerTitle: "Edit Profile",
            header: () => <CustomHeader title="Edit Profile" />,
          }}
        />

        <Stack.Screen
          name="Setting"
          options={{
            // headerTitle: "Setting",
            header: () => <CustomHeader title="Setting" />,
          }}
        />
      </Stack>
    </>
  );
};

export default ProfileLayout;
