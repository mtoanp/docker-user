import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";

const NavBar = () => {
  return (
    <View className="flex-row justify-around bg-green-600 py-4">
      <Link className="text-primary text-3xl" href="/">
        {/* Home */}
        <TabBarIcon name={"home"} color={"#fff"} />
      </Link>
      <Link className="text-primary text-3xl" href="/(tabs)/Profile">
        Profile
      </Link>
      <Link className="text-primary text-3xl" href="/settings">
        Settings
      </Link>
    </View>
  );
};

export default NavBar;
