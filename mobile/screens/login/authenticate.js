import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

export default Authenticate = ({ navigation }) => {
  const [loginType, setLoginType] = useState(0);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View
        style={{
          height: "100%",
        }}
      >
        <SegmentedControl
          values={["user", "worker", "owner"]}
          selectedIndex={loginType}
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 5,
            marginTop: 20,
          }}
          // tintColor="black"
          onChange={(event) => {
            setLoginType(event.nativeEvent.selectedSegmentIndex);
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LottieView
            source={require("./../../assets/anim/music.json")}
            autoPlay
            loop
            style={{ width: "100%", height: "80%" }}
          />
        </View>
        <View
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            padding: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 21 }}
          >
            {"Eat, Drink and connect\n with your favorite people"}
          </Text>
          <Text style={{ color: "#7e7e7e", fontSize: 16, marginTop: 5 }}>
            Check on what your friends are eating
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#f3f3f3",
              borderRadius: 16,
              padding: 16,
              paddingLeft: 20,
              paddingRight: 20,
              // justifyContent: 'center',
              // alignItems: 'center',
              width: "100%",
              marginTop: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: 'space-between',
              }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./../../assets/icons/google.png")}
              />
              <View style={{ marginLeft: 20, gap: 2 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Sign in with Google
                </Text>
                <Text style={{ color: "#7e7e7e", fontSize: 15 }}>Fastest</Text>
              </View>
              <Image
                style={{ width: 24, height: 24, marginLeft: "auto" }}
                source={require("./../../assets/icons/arrow.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f3f3f3",
              borderRadius: 16,
              padding: 16,
              paddingLeft: 20,
              paddingRight: 20,
              // justifyContent: 'center',
              // alignItems: 'center',
              width: "100%",
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate("Email", {
                type:
                  loginType == 0 ? "user" : loginType == 1 ? "worker" : "owner",
              });
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: 'space-between',
              }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./../../assets/icons/mail.png")}
              />
              <View style={{ marginLeft: 20, gap: 2 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Sign in with Email
                </Text>
                <Text style={{ color: "#7e7e7e", fontSize: 15 }}>
                  Using your password
                </Text>
              </View>
              <Image
                style={{ width: 24, height: 24, marginLeft: "auto" }}
                source={require("./../../assets/icons/arrow.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
