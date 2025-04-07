import { NotificationProvider } from '@/context/useNotificationContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NotificationProvider>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='subscriptions/add'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='subscriptions/edit'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='subscriptions/[id]'
          options={{ headerShown: false }}
        />
        <Stack.Screen name='+not-found' />
      </Stack>
      <StatusBar style='light' backgroundColor='#000' />
    </NotificationProvider>
  );
}
