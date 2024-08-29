import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../styles/colors";

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AuthStack");
        }}
      >
        <Text>AuthStack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.cream,
    maxHeight: 45,
  },
});
