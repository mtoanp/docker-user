import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// CustomHeader Component
const StackHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default StackHeader;

// Styles for CustomHeader
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: "red",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
