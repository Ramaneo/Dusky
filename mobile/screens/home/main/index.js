import React, { Profiler, useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainScreen = ({ navigation }) => {
  return <></>;
};
