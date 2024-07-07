import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function HomePage(){
    return (
        <SafeAreaView className="bg-slate-600 flex-1 items-center justify-center m-6">
            <Text className='text-3xl text-blue-500'>Home Feed</Text>
        </SafeAreaView>
    )
}