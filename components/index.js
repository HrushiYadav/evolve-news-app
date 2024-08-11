import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const Index = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView style={tw('flex-1 h-full bg-blue-200 justify-center items-center')}>
         <View style={tw(' items-center')}>
    <View styles={tw("rounded-full")}>
      <Text style={tw('text-blue-800 font-semibold')} > Hello 123</Text>
      <StatusBar style="auto" />
    </View>
    </View>
    </SafeAreaView>
  );
};
{
  /* <SafeAreaView style={tailwind('h-full bg-blue-200')}>
<View style={tailwind("pt-12 items-center")}>
  <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
    <Text style={tailwind('text-blue-800 font-semibold')}>
      Hello Tailwind
    </Text>
    <Text style={tailwind('text-tahiti-400 font-bold')}>
      hrushi
    </Text>
  </View>
</View>
</SafeAreaView> */
}
export default Index;
