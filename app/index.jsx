import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("login");
  //   }, 3000);
  // }, []);

  return (
    <View className="flex-1 justify-end">
      <StatusBar style="light" />

      <Image
        source={require("../assets/images/welcome.png")}
        className="h-full w-full absolute"
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            className="text-white font-bold tracking-widest"
            style={{ fontSize: hp(5) }}
          >
            Best <Text className="text-rose-500">Workout</Text>
          </Text>
          <Text
            className="text-white font-bold tracking-widest"
            style={{ fontSize: hp(3) }}
          >
            For You
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push("home")}
            entering={FadeInDown.delay(200).springify()}
            exiting={FadeOut.delay(200).springify()}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full "
          >
            <Text
              className="text-white font-bold tracking-widest"
              style={{ fontSize: hp(3.4) }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default Index;
