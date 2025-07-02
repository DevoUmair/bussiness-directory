import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
    }} >
        <Tabs.Screen name='home' 
            options={{
                tabBarLabel:'Home',
                tabBarIcon: ({ color }) => (
                    <svg width="24" height="24" fill={color}>
                        <path d="M12 2L1 9h3v11h16V9h3L12 2zM5 20V9.83l7-5.33 7 5.33V20H5z"/>
                    </svg>
                ),
            }}
        />
        <Tabs.Screen name='explore' />
        <Tabs.Screen name='profile' />
    </Tabs>
  )
}