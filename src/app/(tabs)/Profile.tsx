import { View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { pickImage } from "./CreatePost";

const TEMP_EMAIL = "loremIpsum@gmail.com";
const TEMP_USERNAME = "loremIpsum13";


export default function ProfilePage() {
  const [image, setImage] = useState<null | string>(null);

  return (
    <View className="p-3">
      {image ? (
        <Image
          source={{ uri: image }}
          className="w-52 aspect-square rounded-full self-center"
        />
      ) : (
        <View className="w-52 aspect-square self-center rounded-full bg-slate-300"></View>
      )}
      <Text onPress={pickImage} className="p-2 self-center text-blue-500">
        Change
      </Text>

      <View className="p-2">
        <Text className="mr-auto font-bold">User Name</Text>
        <Text className="mr-auto">{TEMP_USERNAME}</Text>
      </View>

      <View className="p-2">
        <Text className="mr-auto font-bold">Email</Text>
        <Text className="mr-auto">{TEMP_EMAIL}</Text>
      </View>

    </View>
  );
}
