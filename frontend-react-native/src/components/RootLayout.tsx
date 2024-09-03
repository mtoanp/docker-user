import React from "react";
import { View, StyleSheet } from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import NavBar from "./NavBar"; // Import your NavBar component
import Header from "./Header"; // Import your Header component
import Footer from "./Footer"; // Import your Footer component

export default function RootLayout({ children }) {
  const insets = useSafeAreaInsets();
  //   console.log(insets);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Header />

      {children}

      {/* <NavBar /> */}
      {/* <Footer /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 1,
  },
  content: {
    flex: 1,
  },
});
