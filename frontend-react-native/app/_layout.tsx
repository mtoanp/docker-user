import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      {/* <Slot /> */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)" options={{ title: '', headerShown: true }} /> */}
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        
        {/* <Stack.Screen name="(tabs)/Home" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="(tabs)/Profile" options={{ headerShown: false }} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
};

export default RootLayout;
