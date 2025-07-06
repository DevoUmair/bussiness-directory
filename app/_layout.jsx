import LoginScreeen from '@/components/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { View } from 'react-native';

const tokenCaache = {
  async getToken(key){
    try {
      return SecureStore.getItemAsync(key)
    } catch (error) {
      return null
    }
  },

  async saveToken(key , value){
    try {
      return SecureStore.setItemAsync(key , value)
    } catch (error) {
        return;
    }
  }
}

export default function RootLayout() {
  useFonts({
    'outfit-regular' : require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium' : require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold' : require('../assets/fonts/Outfit-Bold.ttf')
  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCaache}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <SignedIn>
            <Stack screenOptions={{
              headerShown: false,
            }} >
              <Stack.Screen name="(tabs)" />
            </Stack>
        </SignedIn>
        <SignedOut>
          <LoginScreeen />
        </SignedOut>
      </View>
    </ClerkProvider>
  )
}
