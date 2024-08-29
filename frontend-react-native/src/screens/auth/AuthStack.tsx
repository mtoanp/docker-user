import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackHeader from "../../components/StackHeader";

import LogIn from "./LogIn/LogIn";
import Register from "./Register/Register";
import ResetPassword from "./ResetPassword/ResetPassword";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        // headerShown: true, // Ensure headers are shown
        header: (props) => <StackHeader title={props.route.name} />,
      }}
    >
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
