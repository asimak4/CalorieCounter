import React, { useState } from "react";
import { Alert, StyleSheet, View, AppState, TextInput, SafeAreaView } from "react-native";
import { supabase } from "~/src/lib/supabase";
import { Link, router } from "expo-router";
import DefaultButton from "~/src/components/Button";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
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

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        // Add username to signup data
        data: {
          first_name: firstName,
          last_name: lastName,
          username: username,
        },
      },
    });

    if (error) Alert.alert(error.message);
    // if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false);
  }

  return (
    <SafeAreaView className="bg-black flex-1 p-3">
      <View className="p-5">
        <Text className="text-gray-500 text-3xl font-bold"> Get Started </Text>
      </View>

      <View className="px-15">
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
            placeholder="John"
            autoCapitalize={"words"}
            placeholderTextColor="grey"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLastName(text)}
            value={lastName}
            placeholder="Smith"
            autoCapitalize={"none"}
            placeholderTextColor="grey"
          />
        </View>
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
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="Username"
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
            title="Sign up"
            pressAction={() => signUpWithEmail()}
          />
        </View>
      </View>
      <View className="flex-row self-center pt-20">
        <Text className="text-gray-500" >Already a member? </Text><Link className="text-blue-500" href='/SignInPage'>Sign in</Link>
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
    height: 40,
    margin: 20,
    padding: 10,
    color: 'white', // White text color
    // backgroundColor: 'grey', // Grey background color
    borderRadius: 10, // Border radius for the input field
  },
});
