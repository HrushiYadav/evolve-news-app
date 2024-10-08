import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import Index from "./components/index";
import StackNavigator from "./StackNavigator";
import {LogBox} from "react-native";
LogBox.ignoreAllLogs();
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/useAuth";
export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
    </TailwindProvider>
  );
}
