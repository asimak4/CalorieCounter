import { SafeAreaView, FlatList, Alert, Text } from "react-native";
import PostListItem from "~/src/components/PostListItem";
import posts from "~/assets/data/posts.json";
import { useEffect, useState } from "react";
import { supabase } from "~/src/lib/supabase";
import { useAuth } from "~/src/providers/AuthProvider";

export default function HomePage() {
  const [posts, setPosts] = useState<null | any[] >([]);
  const {session} = useAuth();

  const fetchPosts = async () => {
    let { data, error } = await supabase.from("posts").select("*, user:profiles(*)");
    if(error){
        Alert.alert('Something went wrong.')
    }else {
        setPosts(data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView className="bg-gray-900">
        <FlatList
          data={posts}
          contentContainerStyle={{
            gap: 0,
            maxWidth: 512,
            width: "100%",
            alignSelf: "center",
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PostListItem post={item} />}
        />
    </SafeAreaView>
  );
}
