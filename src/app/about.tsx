import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function AboutPage(){
    return (
        <SafeAreaView>
            <Text>About Us Page!</Text>
            <Link href='/'> Go Home!</Link>
        </SafeAreaView>
    )
}