import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import NavBar from "../components/NavBar";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.HomeContainer}>
      <Text>Hello, World!</Text>
      {/* <NavBar /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HomeContainer: {
    // flex: 1,
    // borderColor: "red",
    // borderWidth: 1,
  },
});
