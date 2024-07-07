
import { Image, View, Text, useWindowDimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AdvancedImage } from "cloudinary-react-native";
import { cld } from "../lib/cloudinary";


/* Photo Editing Imports */
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { sepia } from "@cloudinary/url-gen/actions/effect";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { opacity, brightness } from "@cloudinary/url-gen/actions/adjust";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { png } from "@cloudinary/url-gen/qualifiers/format";
import { focusOn, compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";

type PostListItemProps = {
    post: any
}


export default function PostListItem({ post }: PostListItemProps ){
    const postImage = cld.image(post.image);
    let { width } = useWindowDimensions();
    width = width < 500 ? width : 500;
    postImage.resize(thumbnail().width(width).height(width))

    const postAvatar = cld.image(post.user.avatar_url);
    postAvatar.resize(thumbnail().width(48).height(48).gravity(focusOn(face())))

    return(
        <View className="bg-white">
        {/* Header*/}
        <View className="p-2 flex-row items-center gap-2">
          <AdvancedImage
            cldImg={postAvatar}
            className="w-12 aspect-square rounded-full"
          />
          <Text className="font-semibold">{post.user.username}</Text>
        </View>
        
        <AdvancedImage cldImg={postImage} className="w-full aspect-[4/3]"/>

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