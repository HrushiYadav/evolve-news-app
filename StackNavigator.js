import React, { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import LoginScreen from './components/LoginScreen';
import AboutUsModal from './components/AboutUsModal';
import ReadMoreScreen from './components/ReadMoreScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [userStatus, setUserStatus] = useState(true);

  const callbackHandler = () => {
    setUserStatus(true);
  };
  const logoutHandler = () => {
    setUserStatus(false);
  };
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
      {userStatus ? (
        <>
        <Stack.Group>
        <Stack.Screen
           name="Home" 
           component={HomeScreen}
           initialParams={{ userlogout: logoutHandler }} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="ReadMore"  options={{ title: 'Hot Updates' }} component={ReadMoreScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation:"modal"}}>
        <Stack.Screen name="AboutUs" component={AboutUsModal} />
          </Stack.Group>

        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          initialParams={{ userCallback: callbackHandler }}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
