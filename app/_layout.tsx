import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { StackScreen } from 'react-native-screens';
import Toast from 'react-native-toast-message';
import {initializeFirebase} from "@/services/firebase";


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
      <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <Toast/>
      </>
      
  );
}