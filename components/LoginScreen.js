import React, { useLayoutEffect } from "react";
import { Button, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";
import useAuth from "../hooks/useAuth";
import LoginButton from "./ui/LoginButton";
const LoginScreen = ({ route }) => {
  const { userCallback } = route.params;
  const { signInWithGoogle } = useAuth();
  const navigation = useNavigation();
  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    // <View style={tw("flex-1 bg-appBg justify-between")}>
    //   <View style={tw("flex-1 justify-center items-center")}>
    //     <View style={tw("flex-row items-center")}>
    //       <Image source={require("../assets/Vector.png")} style={tw("mr-2 ")} />
    //       <Text style={tw("text-white text-2xl")}>Evolve</Text>
    //     </View>
    //   </View>
    //   <View style={tw("w-full")}>
    //     <Button title="Login" onPress={userCallback} />
    //   </View>
    // </View>
    <View style={tw("flex-1 bg-appBg justify-center items-center")}>
    <View style={tw("flex-row items-center mb-8 justify-center")}>
      <Image source={require("../assets/Vector.png")} style={tw("mr-2 mb-4")} />
      <Text style={tw("text-white text-2xl font-bold mb-3")}>Evolve</Text>
    </View>
    <TouchableOpacity style={tw(" w-50 mt-2 border border-white p-4 rounded-2xl")} onPress={userCallback}>
        <Text style={tw("font-semibold text-white text-2xl text-center")}>Sign In</Text>
      </TouchableOpacity>
    {/* <View style={tw("w-full px-4 mt-auto mb-8 justify-center flex-row items-center ")}>
        <LoginButton title="Sign In" onPress={userCallback} />
      </View> */}
  
  </View>
  );
};

export default LoginScreen;
