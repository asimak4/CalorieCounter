import { Image, View, Text, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import DefaultButton from "~/src/components/Button";

{
  /* bg-slate-600 flex-1 items-center justify-center m-6 */
}

export const pickImage = async (setImage: any, aspect?: [number, number]) => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: aspect ?? [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

export default function CreatePost() {
  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<null | string>(null);

  useEffect(() => {
    if (!image) {
      pickImage(setImage);
    }
  }, [image]);

  return (
    <View className="p-3 items-center flex-1">
      {image ? (
        <Image
          source={{ uri: image }}
          className="w-72 aspect-square rounded-lg"
        />
      ) : (
        <View className="w-72 aspect-square rounded-lg bg-slate-300"></View>
      )}
      <Text onPress={() => { pickImage(setImage) }} className="p-2 text-blue-500">
        Add Photo
      </Text>

      <TextInput
        value={caption}
        onChangeText={(newCaptionValue: string) => setCaption(newCaptionValue)}
        className="w-full p-3"
        placeholder="Write a caption..."
      />

      <DefaultButton title="Post!" pressAction={()=> { console.log("Post Button Pressed. ") }}/>
        
    </View>
  );
}
