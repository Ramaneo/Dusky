import React, { Profiler, useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
  return (
    <SafeAreaView style={{ backgroundColor: "#FBFBFB" }}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <View
          style={{
            padding: 20,
            paddingLeft: 30,
            paddingRight: 30,
            display: "flex",
            height: "100%",
            width: "100%",
            backgroundColor: "#FBFBFB",
          }}
        >
          <Text style={{ color: "#7e7e7e" }}>Welcome Back,</Text>
          <Text
            style={{
              color: "#000",
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Hakkı Zambakaa
          </Text>
          <View
            style={{ display: "flex", marginTop: 20, flexDirection: "row" }}
          >
            <View
              style={{
                backgroundColor: "#FDE4CA",
                padding: 20,
                borderRadius: 25,
                marginRight: "auto",
                height: 160,
                width: 160,
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 18 }}>Fasshane</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <Text
                  style={{ fontWeight: "500", color: "#6D213C", fontSize: 18 }}
                >
                  242.23 TL
                </Text>
                <Text
                  style={{ color: "#7e7e7e", marginTop: "auto", marginLeft: 5 }}
                >
                  gain
                </Text>
              </View>
              <Text
                style={{ color: "#7e7e7e", fontSize: 12, marginTop: "auto" }}
              >
                Expires: in 10 days
              </Text>
              <View style={{ marginBottom: "auto" }} />
            </View>
            <View
              style={{
                backgroundColor: "#FDE4CA",
                padding: 20,
                borderRadius: 25,
                marginLeft: "auto",
                height: 160,
                width: 160,
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 17 }}>
                New Subscription, many gains!
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#f3f3f3",
                  borderRadius: 9999,
                  padding: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "auto",
                  backgroundColor: "#B33F62",
                }}
                // onPress={loginClicked}
              >
                <Text
                  style={{ fontWeight: "bold", color: "white", fontSize: 15 }}
                >
                  Subscribe
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontWeight: "500", fontSize: 20 }}>
              Latest Activity
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                backgroundColor: "white",
                padding: 20,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.05,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            >
              <View
                style={{
                  borderRadius: 9999,
                  height: 50,
                  width: 50,
                  backgroundColor: "skyblue",
                }}
              />
              <View
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 15,
                }}
              >
                <Text style={{ marginBottom: 5, fontWeight: "500" }}>
                  Drinking Ice Latte in Fasshane
                </Text>
                <Text style={{ color: "#7e7e7e" }}>About 3 minutes ago</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                backgroundColor: "white",
                padding: 20,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.05,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            >
              <View
                style={{
                  borderRadius: 9999,
                  height: 50,
                  width: 50,
                  backgroundColor: "skyblue",
                }}
              />
              <View
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 15,
                }}
              >
                <Text style={{ marginBottom: 5, fontWeight: "500" }}>
                  Drinking Mocha in Fasshane
                </Text>
                <Text style={{ color: "#7e7e7e" }}>About 3 minutes ago</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontWeight: "500", fontSize: 20 }}>
              Recommendation for you
            </Text>
            <View style={{ marginTop: 20, marginLeft: -30, marginRight: -30 }}>
              <ScrollView
                horizontal
                style={{
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
                contentContainerStyle={{
                  gap: 10,
                  paddingRight: 30,
                }}
              >
                <View
                  style={{
                    width: 160,
                    backgroundColor: "#E9F2FE",
                    padding: 20,
                    borderRadius: 25,
                  }}
                >
                  <Text style={{ fontWeight: "500", fontSize: 17 }}>
                    Fasshane
                  </Text>
                  <Text style={{ fontSize: 13, marginTop: 10 }}>
                    Experienced and expertise in the sector
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f3f3f3",
                      borderRadius: 9999,
                      padding: 8,
                      paddingLeft: 20,
                      paddingRight: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      marginTop: 20,
                      backgroundColor: "#96ADFD",
                    }}
                    // onPress={loginClicked}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 15,
                      }}
                    >
                      View
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: 160,
                    backgroundColor: "#E9F2FE",
                    padding: 20,
                    borderRadius: 25,
                  }}
                >
                  <Text style={{ fontWeight: "500", fontSize: 17 }}>
                    Fasshane
                  </Text>
                  <Text style={{ fontSize: 13, marginTop: 10 }}>
                    Experienced and expertise in the sector
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f3f3f3",
                      borderRadius: 9999,
                      padding: 8,
                      paddingLeft: 20,
                      paddingRight: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      marginTop: 20,
                      backgroundColor: "#96ADFD",
                    }}
                    // onPress={loginClicked}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 15,
                      }}
                    >
                      View
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: 160,
                    backgroundColor: "#E9F2FE",
                    padding: 20,
                    borderRadius: 25,
                  }}
                >
                  <Text style={{ fontWeight: "500", fontSize: 17 }}>
                    Fasshane
                  </Text>
                  <Text style={{ fontSize: 13, marginTop: 10 }}>
                    Experienced and expertise in the sector
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f3f3f3",
                      borderRadius: 9999,
                      padding: 8,
                      paddingLeft: 20,
                      paddingRight: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      marginTop: 20,
                      backgroundColor: "#96ADFD",
                    }}
                    // onPress={loginClicked}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 15,
                      }}
                    >
                      View
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
