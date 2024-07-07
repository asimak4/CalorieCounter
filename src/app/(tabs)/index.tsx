import { SafeAreaView, FlatList } from "react-native";
import PostListItem from "~/src/components/PostListItem";
import posts from "~/assets/data/posts.json";

export default function HomePage() {
  return (
      <FlatList
        data={posts}
        contentContainerStyle={{ gap: 0, maxWidth: 512, width: "100%", alignSelf: 'center' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
  );
}
