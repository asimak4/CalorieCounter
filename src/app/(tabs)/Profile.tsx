import { View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { pickImage } from "./CreatePost";
import DefaultButton from "~/src/components/Button";
import { supabase } from "~/src/lib/supabase";
import { useAuth } from "~/src/providers/AuthProvider";

const TEMP_EMAIL = "loremIpsum@gmail.com";
const TEMP_USERNAME = "loremIpsum13";

export default function ProfilePage() {
  const { session } = useAuth();
  const [image, setImage] = useState<null | string>(null);
    console.log("Session Info: ", session?.user)
  return (
    <View className="p-3 flex-1">
      {image ? (
        <Image
          source={{ uri: image }}
          className="w-52 aspect-square rounded-full self-center"
        />
      ) : (
        <View className="w-52 aspect-square self-center rounded-full bg-slate-300"></View>
      )}
      <Text
        onPress={() => {
          pickImage(setImage, [1, 1]);
        }}
        className="p-2 self-center text-blue-500"
      >
        Change
      </Text>

      <View className="p-5">
        <Text className="mr-auto font-semibold">User Name</Text>
        <Text className="mr-auto">{session?.user.user_metadata.username}</Text>
      </View>

      <View className="p-5">
        <Text className="mr-auto font-semibold">Email</Text>
        <Text className="mr-auto">{session?.user.email}</Text>
      </View>

      <DefaultButton
        title="Sign Out"
        pressAction={() => {
          console.log("Sign Out Button Pressed. ");
          supabase.auth.signOut();
        }}
      />
    </View>
  );
}
