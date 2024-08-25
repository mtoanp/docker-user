import React from "react";
import { Slot, Tabs, Stack, Link } from "expo-router";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { NavBar, Header, Footer } from "../components";

const RootLayout = () => {
  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        {/* <StatusBar /> */}

        {/* Header */}
        <View className="h-10 w-full bg-slate-100 justify-center items-center">
          <Header />
        </View>

        {/* NavBar */}
        <NavBar />

        {/* Footer */}
        {/* <View className="h-10 w-full bg-slate-100 justify-center items-center">
          <Footer />
        </View> */}
      </SafeAreaView>
    </>
  );
};

export default RootLayout;
