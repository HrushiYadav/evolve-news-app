import React, { useLayoutEffect } from "react";
import { SafeAreaView, Image, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";

const ReadMoreScreen = ({ route }) => {
  const { card } = route.params;
  const navigation = useNavigation();
  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={tw("flex-1")}>
      <ScrollView contentContainerStyle={tw("")}>
        <View
          key={card.id}
          style={tw("relative bg-white rounded-xl text-center bg-slate-100 mb-5")}
        >
          <View
            style={tw("bg-white bg-opacity-70 p-5 rounded-xl")}
          >
            <Text style={tw("text-sm font-bold text-gray-500 mb-2")}>
              {card.date}
            </Text>
            <Image
              style={tw("h-56 mt-5 w-full object-cover bg-slate-500 rounded-lg")}
              source={require("../assets/tech-Img.jpg")}
            />
            <Text style={tw("text-sm font-bold mt-2 text-gray-500")}>
              Published by {card.publishedby}
            </Text>
            <Text style={tw("text-lg font-bold text-black mt-2")}>
              {card.title}
            </Text>
            <Text style={tw("text-sm text-stone-950 font-semibold mt-2 mb-5")}>
              {card.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReadMoreScreen;
