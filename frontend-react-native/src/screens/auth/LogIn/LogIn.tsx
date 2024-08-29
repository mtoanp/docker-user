import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const LogIn = ({ navigation }: any) => {
  return (
    <View>
      <Text
        style={{
          color: "red",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        LogIn
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ResetPassword");
        }}
      >
        <Text>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;
