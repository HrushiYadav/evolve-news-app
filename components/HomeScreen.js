import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import { Ionicons,Entypo,AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const Dummy_DATA = [
  {
    id: 1,
    date: "Sunday , 9 May 2023",
    publishedby: "AI alerts",
    title: "AI Revolutionizes Healthcare",
    image: "./assets/ai-healthcare.jpg",
    description: `Artificial Intelligence is making significant strides in the healthcare industry, from diagnostics to personalized treatment plans.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam, nunc nec sollicitudin imperdiet, erat augue aliquet eros, egestas interdum mi risus ac felis. In imperdiet ligula eget elit feugiat, non rutrum ipsum efficitur. Nulla volutpat fermentum neque, quis mattis nulla eleifend iaculis. Sed vel est odio. Proin ultrices orci vitae pretium imperdiet. Sed at ex a augue convallis feugiat sit amet sed nibh. Praesent consectetur lobortis purus, et egestas augue maximus in. Suspendisse potenti. Vestibulum pretium consectetur erat, sit amet pretium est mollis sed. Vivamus egestas quam nec posuere pulvinar. Maecenas sit amet lorem orci. Integer eu vestibulum massa. Nulla efficitur libero quis diam convallis, nec venenatis erat sollicitudin. Nulla facilisi. In condimentum vulputate lacus, et pharetra erat vestibulum eget. Nullam ullamcorper ut lorem nec mattis.

Nam vel sodales quam, porttitor suscipit libero. Praesent sed tincidunt tortor, a tempor orci. Praesent sit amet odio ut erat facilisis dapibus. Nullam pellentesque erat vitae neque pharetra tincidunt vel eget mi. Duis tristique aliquam ex. Vivamus quis mattis purus. Fusce et egestas elit. Fusce et egestas ex, et aliquet quam. Sed augue odio, bibendum vel pharetra in, placerat sed nisi. Aenean augue sapien, elementum ut diam a, finibus commodo neque. Aliquam ultrices sapien et lacinia consectetur. Nulla id maximus odio. Curabitur euismod sed tellus quis luctus. Maecenas quam risus, sodales ut quam vitae, dignissim pharetra augue.

Duis ac felis at eros pulvinar efficitur. Aliquam tincidunt velit lacus, sed faucibus libero imperdiet non. Praesent ante libero, consectetur vel malesuada et, fringilla in diam. Vestibulum gravida urna vitae laoreet aliquet. Vestibulum sollicitudin porttitor mattis. Nam non nisl non libero porttitor fringilla. Aenean vitae dolor neque. Nullam finibus, ligula id fermentum porttitor, ipsum arcu ultrices odio, a feugiat elit orci quis mauris. Nam in metus a urna consectetur imperdiet. In hac habitasse platea dictumst. Nam pulvinar lacus vitae scelerisque tempor. Suspendisse elementum ultricies laoreet. Nam nisl odio, auctor nec felis ut, mollis vulputate tortor. Nulla eu luctus arcu, sed tristique urna. Curabitur ac cursus libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Ut suscipit ornare ultrices. Donec vitae scelerisque neque. Fusce a fringilla lorem. Quisque ex urna, fringilla vitae aliquam id, sollicitudin vitae sapien. Aliquam at arcu vitae est dapibus rhoncus. Aenean pulvinar eros in dolor volutpat pharetra. Donec fringilla nibh orci, ut tempus libero tempor et. Sed faucibus pulvinar sollicitudin. Fusce vel condimentum nisl, id eleifend lectus. Sed et elementum justo, a mollis mi.

Aliquam erat volutpat. Nulla suscipit odio condimentum feugiat pretium. Donec eu turpis a tortor pharetra volutpat ac quis neque. Fusce tincidunt venenatis tortor feugiat fringilla. Suspendisse potenti. In a quam vitae ligula mattis consectetur at quis metus. Phasellus et sagittis ante, nec bibendum nunc.

Quisque feugiat venenatis velit id vulputate. Aenean luctus efficitur tristique. Donec posuere dolor interdum, suscipit lorem eu, tempor mi. Aenean accumsan finibus nunc, in interdum dui blandit auctor. Duis urna urna, iaculis nec ultricies posuere, fringilla ut nibh. Nulla risus ligula, consequat eu erat in, molestie efficitur purus. Ut in gravida mi, vitae malesuada ligula.

Suspendisse a egestas magna. Morbi at augue felis. Donec vulputate condimentum nunc consectetur interdum. Sed viverra metus justo, id gravida odio ornare at. Cras at sodales ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sodales massa turpis, sed iaculis libero rhoncus non. Aenean at lorem in ante aliquet convallis. Nulla a nibh quis neque rhoncus scelerisque. Fusce fringilla facilisis lectus at lacinia. Curabitur volutpat sapien at ante gravida fringilla.

Quisque semper porta purus sit amet semper. Proin fermentum tortor non tortor maximus, quis auctor enim viverra. In porta lectus id eros euismod, et.`,
  },
  {
    id: 2,
    date: "Sunday , 9 May 2023",
    publishedby: "AI alerts",
    title: "Quantum Computing Breakthrough",
    image: "./assets/quantum-computing.jpg",
    description: `Researchers have achieved a major breakthrough in quantum computing, potentially revolutionizing fields such as cryptography and complex simulations.

Nam vel sodales quam, porttitor suscipit libero. Praesent sed tincidunt tortor, a tempor orci. Praesent sit amet odio ut erat facilisis dapibus. Nullam pellentesque erat vitae neque pharetra tincidunt vel eget mi. Duis tristique aliquam ex. Vivamus quis mattis purus. Fusce et egestas elit. Fusce et egestas ex, et aliquet quam. Sed augue odio, bibendum vel pharetra in, placerat sed nisi. Aenean augue sapien, elementum ut diam a, finibus commodo neque. Aliquam ultrices sapien et lacinia consectetur. Nulla id maximus odio. Curabitur euismod sed tellus quis luctus. Maecenas quam risus, sodales ut quam vitae, dignissim pharetra augue.

Duis ac felis at eros pulvinar efficitur. Aliquam tincidunt velit lacus, sed faucibus libero imperdiet non. Praesent ante libero, consectetur vel malesuada et, fringilla in diam. Vestibulum gravida urna vitae laoreet aliquet. Vestibulum sollicitudin porttitor mattis. Nam non nisl non libero porttitor fringilla. Aenean vitae dolor neque. Nullam finibus, ligula id fermentum porttitor, ipsum arcu ultrices odio, a feugiat elit orci quis mauris. Nam in metus a urna consectetur imperdiet. In hac habitasse platea dictumst. Nam pulvinar lacus vitae scelerisque tempor. Suspendisse elementum ultricies laoreet. Nam nisl odio, auctor nec felis ut, mollis vulputate tortor. Nulla eu luctus arcu, sed tristique urna. Curabitur ac cursus libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Ut suscipit ornare ultrices. Donec vitae scelerisque neque. Fusce a fringilla lorem. Quisque ex urna, fringilla vitae aliquam id, sollicitudin vitae sapien. Aliquam at arcu vitae est dapibus rhoncus. Aenean pulvinar eros in dolor volutpat pharetra. Donec fringilla nibh orci, ut tempus libero tempor et. Sed faucibus pulvinar sollicitudin. Fusce vel condimentum nisl, id eleifend lectus. Sed et elementum justo, a mollis mi.

Aliquam erat volutpat. Nulla suscipit odio condimentum feugiat pretium. Donec eu turpis a tortor pharetra volutpat ac quis neque. Fusce tincidunt venenatis tortor feugiat fringilla. Suspendisse potenti. In a quam vitae ligula mattis consectetur at quis metus. Phasellus et sagittis ante, nec bibendum nunc.

Quisque feugiat venenatis velit id vulputate. Aenean luctus efficitur tristique. Donec posuere dolor interdum, suscipit lorem eu, tempor mi. Aenean accumsan finibus nunc, in interdum dui blandit auctor. Duis urna urna, iaculis nec ultricies posuere, fringilla ut nibh. Nulla risus ligula, consequat eu erat in, molestie efficitur purus. Ut in gravida mi, vitae malesuada ligula.

Suspendisse a egestas magna. Morbi at augue felis. Donec vulputate condimentum nunc consectetur interdum. Sed viverra metus justo, id gravida odio ornare at. Cras at sodales ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sodales massa turpis, sed iaculis libero rhoncus non. Aenean at lorem in ante aliquet convallis. Nulla a nibh quis neque rhoncus scelerisque. Fusce fringilla facilisis lectus at lacinia. Curabitur volutpat sapien at ante gravida fringilla.

Quisque semper porta purus sit amet semper. Proin fermentum tortor non tortor maximus, quis auctor enim viverra. In porta lectus id eros euismod, et.`,
  },
  {
    id: 3,
    date: "Sunday , 9 May 2023",
    publishedby: "AI alerts",
    title: "5G Network Expansion Continues",
    image: "./assets/5g-network.jpg",
    description: `The rollout of 5G networks is expanding globally, promising faster internet speeds and more reliable connections for mobile users.

Nam vel sodales quam, porttitor suscipit libero. Praesent sed tincidunt tortor, a tempor orci. Praesent sit amet odio ut erat facilisis dapibus. Nullam pellentesque erat vitae neque pharetra tincidunt vel eget mi. Duis tristique aliquam ex. Vivamus quis mattis purus. Fusce et egestas elit. Fusce et egestas ex, et aliquet quam. Sed augue odio, bibendum vel pharetra in, placerat sed nisi. Aenean augue sapien, elementum ut diam a, finibus commodo neque. Aliquam ultrices sapien et lacinia consectetur. Nulla id maximus odio. Curabitur euismod sed tellus quis luctus. Maecenas quam risus, sodales ut quam vitae, dignissim pharetra augue.

Duis ac felis at eros pulvinar efficitur. Aliquam tincidunt velit lacus, sed faucibus libero imperdiet non. Praesent ante libero, consectetur vel malesuada et, fringilla in diam. Vestibulum gravida urna vitae laoreet aliquet. Vestibulum sollicitudin porttitor mattis. Nam non nisl non libero porttitor fringilla. Aenean vitae dolor neque. Nullam finibus, ligula id fermentum porttitor, ipsum arcu ultrices odio, a feugiat elit orci quis mauris. Nam in metus a urna consectetur imperdiet. In hac habitasse platea dictumst. Nam pulvinar lacus vitae scelerisque tempor. Suspendisse elementum ultricies laoreet. Nam nisl odio, auctor nec felis ut, mollis vulputate tortor. Nulla eu luctus arcu, sed tristique urna. Curabitur ac cursus libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Ut suscipit ornare ultrices. Donec vitae scelerisque neque. Fusce a fringilla lorem. Quisque ex urna, fringilla vitae aliquam id, sollicitudin vitae sapien. Aliquam at arcu vitae est dapibus rhoncus. Aenean pulvinar eros in dolor volutpat pharetra. Donec fringilla nibh orci, ut tempus libero tempor et. Sed faucibus pulvinar sollicitudin. Fusce vel condimentum nisl, id eleifend lectus. Sed et elementum justo, a mollis mi.

Aliquam erat volutpat. Nulla suscipit odio condimentum feugiat pretium. Donec eu turpis a tortor pharetra volutpat ac quis neque. Fusce tincidunt venenatis tortor feugiat fringilla. Suspendisse potenti. In a quam vitae ligula mattis consectetur at quis metus. Phasellus et sagittis ante, nec bibendum nunc.

Quisque feugiat venenatis velit id vulputate. Aenean luctus efficitur tristique. Donec posuere dolor interdum, suscipit lorem eu, tempor mi. Aenean accumsan finibus nunc, in interdum dui blandit auctor. Duis urna urna, iaculis nec ultricies posuere, fringilla ut nibh. Nulla risus ligula, consequat eu erat in, molestie efficitur purus. Ut in gravida mi, vitae malesuada ligula.

Suspendisse a egestas magna. Morbi at augue felis. Donec vulputate condimentum nunc consectetur interdum. Sed viverra metus justo, id gravida odio ornare at. Cras at sodales ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sodales massa turpis, sed iaculis libero rhoncus non. Aenean at lorem in ante aliquet convallis. Nulla a nibh quis neque rhoncus scelerisque. Fusce fringilla facilisis lectus at lacinia. Curabitur volutpat sapien at ante gravida fringilla.

Quisque semper porta purus sit amet semper. Proin fermentum tortor non tortor maximus, quis auctor enim viverra. In porta lectus id eros euismod, et.`,
  },
  {
    id: 4,
    date: "Sunday , 9 May 2023",
    publishedby: "AI alerts",
    title: "Electric Vehicles Gain Popularity",
    image: "./assets/electric-vehicles.jpg",
    description: `Electric vehicles are becoming more mainstream as advancements in battery technology and infrastructure make them a viable option for consumers.

Nam vel sodales quam, porttitor suscipit libero. Praesent sed tincidunt tortor, a tempor orci. Praesent sit amet odio ut erat facilisis dapibus. Nullam pellentesque erat vitae neque pharetra tincidunt vel eget mi. Duis tristique aliquam ex. Vivamus quis mattis purus. Fusce et egestas elit. Fusce et egestas ex, et aliquet quam. Sed augue odio, bibendum vel pharetra in, placerat sed nisi. Aenean augue sapien, elementum ut diam a, finibus commodo neque. Aliquam ultrices sapien et lacinia consectetur. Nulla id maximus odio. Curabitur euismod sed tellus quis luctus. Maecenas quam risus, sodales ut quam vitae, dignissim pharetra augue.

Duis ac felis at eros pulvinar efficitur. Aliquam tincidunt velit lacus, sed faucibus libero imperdiet non. Praesent ante libero, consectetur vel malesuada et, fringilla in diam. Vestibulum gravida urna vitae laoreet aliquet. Vestibulum sollicitudin porttitor mattis. Nam non nisl non libero porttitor fringilla. Aenean vitae dolor neque. Nullam finibus, ligula id fermentum porttitor, ipsum arcu ultrices odio, a feugiat elit orci quis mauris. Nam in metus a urna consectetur imperdiet. In hac habitasse platea dictumst. Nam pulvinar lacus vitae scelerisque tempor. Suspendisse elementum ultricies laoreet. Nam nisl odio, auctor nec felis ut, mollis vulputate tortor. Nulla eu luctus arcu, sed tristique urna. Curabitur ac cursus libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Ut suscipit ornare ultrices. Donec vitae scelerisque neque. Fusce a fringilla lorem. Quisque ex urna, fringilla vitae aliquam id, sollicitudin vitae sapien. Aliquam at arcu vitae est dapibus rhoncus. Aenean pulvinar eros in dolor volutpat pharetra. Donec fringilla nibh orci, ut tempus libero tempor et. Sed faucibus pulvinar sollicitudin. Fusce vel condimentum nisl, id eleifend lectus. Sed et elementum justo, a mollis mi.

Aliquam erat volutpat. Nulla suscipit odio condimentum feugiat pretium. Donec eu turpis a tortor pharetra volutpat ac quis neque. Fusce tincidunt venenatis tortor feugiat fringilla. Suspendisse potenti. In a quam vitae ligula mattis consectetur at quis metus. Phasellus et sagittis ante, nec bibendum nunc.

Quisque feugiat venenatis velit id vulputate. Aenean luctus efficitur tristique. Donec posuere dolor interdum, suscipit lorem eu, tempor mi. Aenean accumsan finibus nunc, in interdum dui blandit auctor. Duis urna urna, iaculis nec ultricies posuere, fringilla ut nibh. Nulla risus ligula, consequat eu erat in, molestie efficitur purus. Ut in gravida mi, vitae malesuada ligula.

Suspendisse a egestas magna. Morbi at augue felis. Donec vulputate condimentum nunc consectetur interdum. Sed viverra metus justo, id gravida odio ornare at. Cras at sodales ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sodales massa turpis, sed iaculis libero rhoncus non. Aenean at lorem in ante aliquet convallis. Nulla a nibh quis neque rhoncus scelerisque. Fusce fringilla facilisis lectus at lacinia. Curabitur volutpat sapien at ante gravida fringilla.

Quisque semper porta purus sit amet semper. Proin fermentum tortor non tortor maximus, quis auctor enim viverra. In porta lectus id eros euismod, et.`,
  },
  {
    id: 5,
    date: "Sunday , 9 May 2023",
    publishedby: "AI alerts",
    title: "Blockchain Technology in Finance",
    image: "./assets/blockchain-finance.jpg",
    description: `Blockchain technology is transforming the finance sector by providing secure, transparent, and efficient ways to conduct transactions.

Nam vel sodales quam, porttitor suscipit libero. Praesent sed tincidunt tortor, a tempor orci. Praesent sit amet odio ut erat facilisis dapibus. Nullam pellentesque erat vitae neque pharetra tincidunt vel eget mi. Duis tristique aliquam ex. Vivamus quis mattis purus. Fusce et egestas elit. Fusce et egestas ex, et aliquet quam. Sed augue odio, bibendum vel pharetra in, placerat sed nisi. Aenean augue sapien, elementum ut diam a, finibus commodo neque. Aliquam ultrices sapien et lacinia consectetur. Nulla id maximus odio. Curabitur euismod sed tellus quis luctus. Maecenas quam risus, sodales ut quam vitae, dignissim pharetra augue.

Duis ac felis at eros pulvinar efficitur. Aliquam tincidunt velit lacus, sed faucibus libero imperdiet non. Praesent ante libero, consectetur vel malesuada et, fringilla in diam. Vestibulum gravida urna vitae laoreet aliquet. Vestibulum sollicitudin porttitor mattis. Nam non nisl non libero porttitor fringilla. Aenean vitae dolor neque. Nullam finibus, ligula id fermentum porttitor, ipsum arcu ultrices odio, a feugiat elit orci quis mauris. Nam in metus a urna consectetur imperdiet. In hac habitasse platea dictumst. Nam pulvinar lacus vitae scelerisque tempor. Suspendisse elementum ultricies laoreet. Nam nisl odio, auctor nec felis ut, mollis vulputate tortor. Nulla eu luctus arcu, sed tristique urna. Curabitur ac cursus libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Ut suscipit ornare ultrices. Donec vitae scelerisque neque. Fusce a fringilla lorem. Quisque ex urna, fringilla vitae aliquam id, sollicitudin vitae sapien. Aliquam at arcu vitae est dapibus rhoncus. Aenean pulvinar eros in dolor volutpat pharetra. Donec fringilla nibh orci, ut tempus libero tempor et. Sed faucibus pulvinar sollicitudin. Fusce vel condimentum nisl, id eleifend lectus. Sed et elementum justo, a mollis mi.

Aliquam erat volutpat. Nulla suscipit odio condimentum feugiat pretium. Donec eu turpis a tortor pharetra volutpat ac quis neque. Fusce tincidunt venenatis tortor feugiat fringilla. Suspendisse potenti. In a quam vitae ligula mattis consectetur at quis metus. Phasellus et sagittis ante, nec bibendum nunc.

Quisque feugiat venenatis velit id vulputate. Aenean luctus efficitur tristique. Donec posuere dolor interdum, suscipit lorem eu, tempor mi. Aenean accumsan finibus nunc, in interdum dui blandit auctor. Duis urna urna, iaculis nec ultricies posuere, fringilla ut nibh. Nulla risus ligula, consequat eu erat in, molestie efficitur purus. Ut in gravida mi, vitae malesuada ligula.

Suspendisse a egestas magna. Morbi at augue felis. Donec vulputate condimentum nunc consectetur interdum. Sed viverra metus justo, id gravida odio ornare at. Cras at sodales ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sodales massa turpis, sed iaculis libero rhoncus non. Aenean at lorem in ante aliquet convallis. Nulla a nibh quis neque rhoncus scelerisque. Fusce fringilla facilisis lectus at lacinia. Curabitur volutpat sapien at ante gravida fringilla.

Quisque semper porta purus sit amet semper. Proin fermentum tortor non tortor maximus, quis auctor enim viverra. In porta lectus id eros euismod, et.`,
  },
  {
    id: 6,
    date: "Sunday , 9 May 2023",
    publishedby: "AI alerts",
    title: "AR and VR: The Future of Gaming",
    image: "./assets/ar-vr-gaming.jpg",
    description: `Augmented Reality (AR) and Virtual Reality (VR) are revolutionizing the gaming industry, offering immersive experiences and new ways to play.

Nam vel sodales quam, porttitor suscipit libero. Praesent sed tincidunt tortor, a tempor orci. Praesent sit amet odio ut erat facilisis dapibus. Nullam pellentesque erat vitae neque pharetra tincidunt vel eget mi. Duis tristique aliquam ex. Vivamus quis mattis purus. Fusce et egestas elit. Fusce et egestas ex, et aliquet quam. Sed augue odio, bibendum vel pharetra in, placerat sed nisi. Aenean augue sapien, elementum ut diam a, finibus commodo neque. Aliquam ultrices sapien et lacinia consectetur. Nulla id maximus odio. Curabitur euismod sed tellus quis luctus. Maecenas quam risus, sodales ut quam vitae, dignissim pharetra augue.

Duis ac felis at eros pulvinar efficitur. Aliquam tincidunt velit lacus, sed faucibus libero imperdiet non. Praesent ante libero, consectetur vel malesuada et, fringilla in diam. Vestibulum gravida urna vitae laoreet aliquet. Vestibulum sollicitudin porttitor mattis. Nam non nisl non libero porttitor fringilla. Aenean vitae dolor neque. Nullam finibus, ligula id fermentum porttitor, ipsum arcu ultrices odio, a feugiat elit orci quis mauris. Nam in metus a urna consectetur imperdiet. In hac habitasse platea dictumst. Nam pulvinar lacus vitae scelerisque tempor. Suspendisse elementum ultricies laoreet. Nam nisl odio, auctor nec felis ut, mollis vulputate tortor. Nulla eu luctus arcu, sed tristique urna. Curabitur ac cursus libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Ut suscipit ornare ultrices. Donec vitae scelerisque neque. Fusce a fringilla lorem. Quisque ex urna, fringilla vitae aliquam id, sollicitudin vitae sapien. Aliquam at arcu vitae est dapibus rhoncus. Aenean pulvinar eros in dolor volutpat pharetra. Donec fringilla nibh orci, ut tempus libero tempor et. Sed faucibus pulvinar sollicitudin. Fusce vel condimentum nisl, id eleifend lectus. Sed et elementum justo, a mollis mi.

Aliquam erat volutpat. Nulla suscipit odio condimentum feugiat pretium. Donec eu turpis a tortor pharetra volutpat ac quis neque. Fusce tincidunt venenatis tortor feugiat fringilla. Suspendisse potenti. In a quam vitae ligula mattis consectetur at quis metus. Phasellus et sagittis ante, nec bibendum nunc.

Quisque feugiat venenatis velit id vulputate. Aenean luctus efficitur tristique. Donec posuere dolor interdum, suscipit lorem eu, tempor mi. Aenean accumsan finibus nunc, in interdum dui blandit auctor. Duis urna urna, iaculis nec ultricies posuere, fringilla ut nibh. Nulla risus ligula, consequat eu erat in, molestie efficitur purus. Ut in gravida mi, vitae malesuada ligula.

Suspendisse a egestas magna. Morbi at augue felis. Donec vulputate condimentum nunc consectetur interdum. Sed viverra metus justo, id gravida odio ornare at. Cras at sodales ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sodales massa turpis, sed iaculis libero rhoncus non. Aenean at lorem in ante aliquet convallis. Nulla a nibh quis neque rhoncus scelerisque. Fusce fringilla facilisis lectus at lacinia. Curabitur volutpat sapien at ante gravida fringilla.

Quisque semper porta purus sit amet semper. Proin fermentum tortor non tortor maximus, quis auctor enim viverra. In porta lectus id eros euismod, et.`,
  },
];

const HomeScreen = ({ route }) => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { userlogout } = route.params;
 const swipeRef = useRef();

  const navigateToDetails = (card) => {
    navigation.navigate("ReadMore", { card });
  };

  return (
    <SafeAreaView style={tw("flex-1 bg-HomeBg")}>
      <View style={tw("flex-row justify-between items-center relative px-5")}>
        <TouchableOpacity onPress={userlogout}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={require("../assets/dummyImage.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("AboutUs")}>
          <Text
            style={tw("text-white text-2xl font-bold mb-3 mt-5 text-slate-950")}
          >
            evolve
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>

      <View style={[tw("flex-1 -mt-6 rounded-lg "), styles.cardShadow]}>
        <Swiper
           ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={Dummy_DATA}
          stackSize={6}
          cardIndex={0}
          animateCardOpacity
          stackScale={1}
          stackSeparation={2} // Reduce the separation between cards
          verticalSwipe={false}
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View
              key={card.id}
              style={[
                tw("relative bg-white h-3/4 rounded-xl bg-slate-100"),
                styles.cardShadow,
              ]}
            >
              <View
                style={tw(
                  "absolute top-0 bg-white bg-opacity-70 p-5 rounded-xl w-full bg-flashBg"
                )}
              >
                <Text style={tw("text-sm font-bold text-gray-500 mb-2")}>
                  {card.date}
                </Text>
                <Image
                  className="items-center justify-center h-56 mt-5 w-full mx-auto object-cover bg-slate-500 rounded-lg"
                  source={require("../assets/Frame.png")}
                />
                <Text style={tw("text-sm font-bold mt-2 text-gray-500")}>
                  Published by {card.publishedby}
                </Text>
                <Text style={tw("text-lg font-bold text-black")}>
                  {card.title}
                </Text>
                <Text style={tw("text-sm text-stone-950 font-semibold mt-2")}>
                  {card.description.length > 600
                    ? card.description.substring(0, 600) + "..."
                    : card.description}
                </Text>
                <View>
                  <TouchableOpacity
                    style={tw("mt-2 ")}
                    onPress={() => navigateToDetails(card)}
                  >
                    <Text style={tw("text-blue-500 font-bold")}>See More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={tw("flex flex-row justify-evenly")}>
        <TouchableOpacity 
        style={tw("items-center justify-center rounded-full w-16 h-16 bg-red-200")}
        onPress={()=>swipeRef.current.swipeLeft()}
        >
          <Entypo name="cross" size={24} color={'red'}/>
        </TouchableOpacity>
        <TouchableOpacity
         style={tw("items-center justify-center rounded-full w-16 h-16 bg-green-200")}
         onPress={()=>swipeRef.current.swipeRight()}
         >
        <AntDesign name="heart" size={24} color={'green'}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default HomeScreen;
