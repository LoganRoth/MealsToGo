import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { MapScreen } from "../../features/map/screens/map.screen";

const MapStack = createStackNavigator();

const screenOptions = () => {
  return {
    ...TransitionPresets.ModalPresentationIOS,
    headerShown: false,
  };
};

export const MapNavigator = () => {
  return (
    <MapStack.Navigator screenOptions={screenOptions}>
      <MapStack.Screen name="MapStack" component={MapScreen} />
    </MapStack.Navigator>
  );
};
