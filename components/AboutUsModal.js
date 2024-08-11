import React from 'react'
import { ImageBackground, SafeAreaView, Text, StyleSheet } from 'react-native'
import { useTailwind } from 'tailwind-rn'

const AboutUsModal = () => {
    const tw = useTailwind();
  return (
<SafeAreaView style={tw('flex-1')}>
      <ImageBackground source={require('../assets/aboutus.png')} style={tw('flex-1 justify-start items-center w-full h-full')}>
        <Text style={tw('text-white text-xl font-bold mt-5')}>Developed By Hrushi</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}



export default AboutUsModal;
