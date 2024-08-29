import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootLayout from "./src/components/RootLayout";
import MainStackNavigator from "./src/navigations/MainStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootLayout>
          <MainStackNavigator />
        </RootLayout>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
