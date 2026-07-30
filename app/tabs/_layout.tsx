import { Tabs } from 'expo-router';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
export default function TabLayout() {
return (
  <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4B918C',
        tabBarInactiveTintColor: '#AAAAAA',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Tabs.Screen
        name="homepage"
        options={{
          title: 'Homepage',
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
); }