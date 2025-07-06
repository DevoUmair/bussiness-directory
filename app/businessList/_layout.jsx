import { Stack } from 'expo-router';

export default function BusinessListLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
         headerBackTitle: 'Back', 
        headerBackVisible: true,
      }}
    />
  );
}