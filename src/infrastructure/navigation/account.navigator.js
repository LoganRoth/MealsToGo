import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="main" component={AccountScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
