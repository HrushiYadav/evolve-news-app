import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const LoginButton = ({ title, onPress }) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tw("border bg-blue-500 py-3 rounded-lg"), { borderColor: '#ffffff' }]}
    >
      <Text style={tw("text-white text-2xl text-center")}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
