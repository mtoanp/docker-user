import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function AppIndx() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-red-500">Index</Text>
    </View>
  );
}