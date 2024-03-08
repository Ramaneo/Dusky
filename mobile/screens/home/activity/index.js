import React, { Profiler, useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
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
  return (
    <SafeAreaView style={{ backgroundColor: "#FBFBFB" }}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          justifyContent: "center",
          display: "flex",
          height: "100%",
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
          <Text
            style={{
              color: "#000",
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Activity
          </Text>
          <Text style={{ color: "#7e7e7e", marginTop: 20 }}>
            Filter by location
          </Text>
          <View style={{ marginTop: 10, marginLeft: -30, marginRight: -30 }}>
            <ScrollView
              style={{
                paddingLeft: 30,
                paddingRight: 30,
              }}
              horizontal
              contentContainerStyle={{ gap: 10 }}
            >
              <View
                style={{
                  padding: 15,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 15,
                  backgroundColor: "#DCB1F1",
                }}
              >
                <Text>All</Text>
              </View>
              <View
                style={{
                  padding: 15,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 15,
                  backgroundColor: "#EAF1FE",
                }}
              >
                <Text>Fasshane</Text>
              </View>
              <View
                style={{
                  padding: 15,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 15,
                  backgroundColor: "#EAF1FE",
                }}
              >
                <Text>Esspressolab</Text>
              </View>
            </ScrollView>
          </View>

          <View style={{ gap: 5 }}>
            {sampleActivities.map((activity, i) => (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  borderRadius: 20,
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
                    {activity.user}
                  </Text>
                  <Text style={{ color: "#7e7e7e" }}>{activity.content}</Text>
                </View>
                <Text
                  style={{
                    color: "#7e7e7e",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "auto",
                    fontSize: 10,
                  }}
                >
                  {activity.time}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const sampleActivities = [
  { user: "hakkizambak", content: "having a coffee in Fasshane", time: "now" },
  { user: "gunuc", content: "having a coffee in Fasshane", time: "now" },
  { user: "berdansen", content: "grabbing a bite in Kopuklu", time: "1m" },
  { user: "berdansen", content: "having a coffee in Fasshane", time: "10m" },
  { user: "raman", content: "having a coffee in Esspressolab", time: "1d" },
  { user: "berkem", content: "having a coffee in Fasshane", time: "3d" },
];
