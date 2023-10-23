import React, { useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import * as AnimateAble from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const StartupScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoarding1");
    }, 3000);
  }, []);
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-background1 justify-center items-center">
        <View className="flex-row items-baseline">
          <AnimateAble.Text
            iterationCount={2}
            animation="slideInLeft"
            className="text-3xl font-bold mr-1 text-[#00D7FF] uppercase"
          >
            FIT
          </AnimateAble.Text>
          <AnimateAble.Text
            iterationCount={2}
            animation="slideInUp"
            className="text-3xl font-bold mr-1 text-[#00D7FF] uppercase"
          >
            Buddy
          </AnimateAble.Text>
          <AnimateAble.Text
            iterationCount={2}
            animation="slideInRight"
            className="text-8xl font-bold text-[#ffffff]"
          >
            .
          </AnimateAble.Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartupScreen;
