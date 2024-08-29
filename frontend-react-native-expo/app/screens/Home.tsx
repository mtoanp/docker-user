import { Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
// @expo/vector-icons
// Ionicons: Ionicons Official Website
// FontAwesome: FontAwesome Icons
// Material Icons: Material Icons Guide
// Entypo: Entypo Icons
// Feather: Feather Icons
// AntDesign: AntDesign Icons
// SimpleLineIcons: SimpleLineIcons GitHub
// EvilIcons: EvilIcons GitHub

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-3xl text-red-500">Welcome !</Text>
      <Ionicons name="home" size={24} color={Colors.dark.icon} />
    </View>
  );
};

export default Home;
