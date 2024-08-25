import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { Icon } from "@rneui/base";

const Profile = () => {
  const router = useRouter();

  return (
    <View>
      <View className="header p-8">
        <Icon
          className="z-2"
          name="account-circle"
          type="material-community"
          color="#000000"
          size={140}
        />
        <View className="items-center p-2">
          <Text className="mt-2 text-xl font-bold">I am User</Text>
        </View>
      </View>

      {/* <Link className="p-4 text-red-400" href="screens/profile/(editProfile)">
        Edit Profile
      </Link> */}

      {/* Use Link with asChild to make TouchableOpacity act as the Link */}
      {/* <Link href="screens/profile/(editProfile)" asChild>
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "blue",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Go to Edit Profile
          </Text>
        </TouchableOpacity>
      </Link> */}

      <Button
        title="Edit Profile"
        onPress={() => router.push("screens/profile/(editProfile)")}
      />

      <Button
        title="Setting"
        onPress={() => router.push("screens/profile/Setting")}
      />
    </View>
  );
};

export default Profile;
