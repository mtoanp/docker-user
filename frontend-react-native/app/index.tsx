import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text className="text-3xl text-red-500">Index</Text> */}
      <StatusBar style="auto" />
      <Link href="/(tabs)/Feet" className="text-3xl text-blue-500">
        Go Feet
      </Link>
      {/* <Link href="/(tabs)/Profile" className="text-3xl text-blue-500">Profile</Link> */}
    </View>
  );
};

export default App;
