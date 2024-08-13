import React from "react";
import { Slot, Stack, Link } from "expo-router";
import { View, Text } from "react-native";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <>
      {/* Footer */}
      <View className="h-10 w-full bg-slate-100 justify-center items-center">
        <Text>Header</Text>
      </View>

      {/* Screens */}
      <Slot />

      {/* Footer */}
      <View className="h-10 w-full bg-slate-100 justify-center items-center">
        <Text>Footer</Text>
      </View>

      {/* NavBar */}
      <NavBar />

      {/* <Stack> */}
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="(tabs)" options={{ title: '', headerShown: true }} /> */}
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}

      {/* <Stack.Screen name="(tabs)/Home" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="(tabs)/Profile" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="+not-found" /> */}
      {/* </Stack> */}
    </>
  );
};

export default RootLayout;
