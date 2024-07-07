import { Pressable, Text, View } from "react-native";

type DefaultButtonProps = {
  title: string;
  pressAction: any;
  otherAction?: any;
};

export default function DefaultButton({
  title,
  pressAction,
  otherAction,
}: DefaultButtonProps) {
  return (
    <View className="mt-auto w-full">
      <Pressable
        onPress={() => {
          pressAction();
          if (otherAction) {
            otherAction();
          }
        }}
        className="bg-blue-500 w-full p-3 rounded-lg items-center"
      >
        <Text className="text-white font-semibold">{title}</Text>
      </Pressable>
    </View>
  );
}
