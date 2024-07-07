import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'black', tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "For you",
          tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />,
        }}
    />
    <Tabs.Screen
        name="Other"
        options={{
          headerTitle: "Other",
          tabBarIcon: ({color}) => <AntDesign name="plussquareo" size={24} color={color}/> ,
        }}
    />
    <Tabs.Screen
        name="Profile"
        options={{
          headerTitle: "User Profile",
          tabBarIcon: ({color}) => <Feather name="user" size={24} color={color} /> ,
        }}
    />
    </Tabs>
  );
}
