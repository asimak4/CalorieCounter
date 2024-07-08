import { Redirect, Stack } from "expo-router";
import { useAuth } from "~/src/providers/AuthProvider";
import WelcomeScreen from ".";

export default function AuthLayout(){
    const {isAuthenticated, session} = useAuth();
    console.log("Last Sign in: ", session?.user.last_sign_in_at)
    if (isAuthenticated) {
        if (session?.user.created_at === session?.user.last_sign_in_at) {
            // Redirect to initial setup or onboarding
            return <Redirect href='/UploadProfilePic' />;
          } else {
            // Redirect to main app/tabs screen
            return <Redirect href='/(tabs)' />;
          }        
    } 
    return( 
        <Stack screenOptions={{ headerShown: false }}/>
    )
}