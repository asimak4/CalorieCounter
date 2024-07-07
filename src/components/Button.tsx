import { Pressable, Text, View } from "react-native";

type DefaultButtonProps = {
  title: string;
  pressAction: any;
};

export default function DefaultButton({
  title,
  pressAction,
}: DefaultButtonProps) {
  return (
    <View className="mt-auto w-full">
      <Pressable
        onPress={pressAction}
        className="bg-blue-500 w-full p-3 rounded-lg items-center"
      >
        <Text className="text-white font-semibold">{title}</Text>
      </Pressable>
    </View>
  );
}
