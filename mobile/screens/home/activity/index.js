import React, { Profiler, useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default Activity = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ActivityScreen = ({ navigation }) => {
  return <></>;
};
