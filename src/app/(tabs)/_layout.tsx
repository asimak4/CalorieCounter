import { Redirect, Stack, Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "~/src/providers/AuthProvider";
export default function TabsLayout() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect href="/(auth)" />;
  }
  return (
    <>
      <Tabs
        screenOptions={{ tabBarActiveTintColor: "white", tabBarShowLabel: false, tabBarStyle: { backgroundColor: 'black' } }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: "For you",
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black'
            },
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="CreatePost"
          options={{
            headerTitle: "Create Post",
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black'
            },
            tabBarIcon: ({ color }) => (
              <AntDesign name="plussquareo" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            headerTitle: "User Profile",
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black'
            },
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />
        
      </Tabs>
      </>
  );
}

