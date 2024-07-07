
import { Image, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type PostListItemProps = {
    post: any
}

export default function PostListItem({ post }: PostListItemProps ){
    return(
        <View className="bg-white">
        {/* Header*/}
        <View className="p-2 flex-row items-center gap-2">
          <Image
            source={{ uri: post.user.image_url }}
            className="w-12 aspect-square rounded-full"
          />
          <Text className="font-semibold">{post.user.username}</Text>
        </View>
        <Image
          source={{ uri: post.image_url }}
          className="w-full aspect-[4/3]"
        />
        <View className="p-2">
          <Text>
              {post.caption}
          </Text>
        </View>
        <View className="flex-row gap-3 p-2">
          <AntDesign name="hearto" size={20}/>
          <Ionicons name="chatbubble-outline" size={20}/>
          <Ionicons className="ml-auto" name="accessibility-outline" size={20}/>
        </View>
      </View>
    )
}