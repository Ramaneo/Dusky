import React, { Component, useState, useEffect, Profiler } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";
import Profile from "./profile";
import Main from "./main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Activity from "./activity";
import Offers from "./offers";
import { SvgUri, SvgXml } from "react-native-svg";
import HomeIcon from "./../../assets/icons/home.svg";
import WalletIcon from "./../../assets/icons/wallet.svg";
import ActivityIcon from "./../../assets/icons/activity.svg";
import ProfileIcon from "./../../assets/icons/profile.svg";

const Tab = createBottomTabNavigator();

export default Home = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      backBehavior="none"
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
        initialParams={{
          Icon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{ headerShown: false }}
        initialParams={{
          Icon: WalletIcon,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{ headerShown: false }}
        initialParams={{
          Icon: ActivityIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Profile}
        initialParams={{
          Icon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  console.log(state);
  console.log(descriptors);
  console.log(navigation);

  return (
    <BlurView
      blurType="light"
      blurAmount={40}
      style={{
        position: "absolute",
        height: 90,
        bottom: 0,
        right: 0,
        left: 0,

        flexDirection: "row",
        paddingTop: 30,
        borderTopWidth: 1,
        borderTopColor: "#e7e8cc",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const IconComponent = route.params.Icon;

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {/* <Image
              style={{
                height: 25,
                width: 25,
                tintColor: isFocused ? "black" : "#7e7e7e",
              }}
              source={route.params.icon}
            /> */}
            {/* <SvgXml
              width="25"
              height="25"
              fill={isFocused ? "black" : "#7e7e7e"}
              xml={route.params.icon}
            /> */}
            <IconComponent
              height={25}
              width={25}
              color={isFocused ? "black" : "#7e7e7e"}
            />

            {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text> */}
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}
