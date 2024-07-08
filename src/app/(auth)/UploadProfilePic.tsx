import React, { useState } from "react";
import { Alert, StyleSheet, View, AppState, TextInput, SafeAreaView } from "react-native";
import { supabase } from "~/src/lib/supabase";
import { Link, router } from "expo-router";
import { Text } from "react-native";
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

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <SafeAreaView className="bg-black flex-1 p-3">
      <View className="mt-10 p-5">
        <Text className="text-gray-500 text-3xl font-bold"> Welcome Back </Text>
      </View>

      <View className="mt-20 px-15">
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email Address"
            autoCapitalize={"none"}
            placeholderTextColor="grey"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={"none"}
            placeholderTextColor="grey"
          />
        </View>
      </View>
      <View className="gap-4 pt-10 self-center">
        <View>
          <CustomButton
            title="Sign in"
            pressAction={() => signInWithEmail()}
          />
          <Text className="text-gray-600 self-center p-5">Forgot password?</Text>
        </View>
      </View>
      <View className="flex-row self-center mt-36">
        <Text className="text-gray-500" >New here? </Text><Link className="text-blue-500" href='/SignUpPage'>Sign up</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'grey', // Light grey color for the bottom border
    borderBottomWidth: 1, // Width of the bottom border
    borderTopWidth: 0, // Hide top border
    borderLeftWidth: 0, // Hide left border
    borderRightWidth: 0, // Hide right border
    height: 50,
    margin: 20,
    padding: 10,
    color: 'white', // White text color
    // backgroundColor: 'grey', // Grey background color
    borderRadius: 10, // Border radius for the input field
  },
});
