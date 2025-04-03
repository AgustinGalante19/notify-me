import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <AntDesign name='search1' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='user'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name='user' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
