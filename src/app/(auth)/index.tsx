import React, { useState } from "react";
import { Alert, StyleSheet, View, AppState, Text, SafeAreaView } from "react-native";
import { supabase } from "~/src/lib/supabase";
import { Button, Input } from "@rneui/themed";
import { Redirect, router } from "expo-router";
import DefaultButton from "~/src/components/Button";
import CustomButton from "~/src/components/Button";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="bg-black flex-1 p-3 justify-center gap-80">
      <View className="gap-5">
        <View className="gap-3">
          <Text className="text-white text-7xl font-bold"> Welcome to </Text>
          <Text className="text-blue-500 text-7xl font-bold"> CalPal </Text>
        </View>
        <View className=" flex-row px-2">
          <Text className="text-white text-xl subpixel-antialiased font-extralight"> Track </Text>
          <Text className="text-gray-700 text-xl  subpixel-antialiased font-normal"> Together </Text>
          <Text className="text-white text-xl subpixel-antialiased font-extralight"> Achieve </Text>
          <Text className="text-gray-700 text-xl subpixel-antialiased font-normal"> Together </Text>
        </View>
      </View>
      <View className="self-center gap-5">
        <CustomButton
          title="Sign In"
          pressAction={() => {
            router.push("/SignInPage");
          }}
          // buttonStyles={"bg-blue-500 h-12 w-52 p-3 rounded-full items-center"}
        />
        <CustomButton
          title="Sign Up"
          pressAction={() => {
            router.push("/SignUpPage");
          }}
          // buttonStyles={"bg-blue-500 h-12 w-52 p-3 rounded-full items-center"}
        />
      </View>
    </SafeAreaView>
  );
}
