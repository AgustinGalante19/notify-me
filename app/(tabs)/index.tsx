import { useState, useEffect, useRef } from 'react';
import { Text, View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from '@/services/notifications';
import Container from '@/components/ui/container';
import Typography from '@/components/ui/typography';
import { useNotification } from '@/context/useNotificationContext';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const { expoPushToken, notification } = useNotification();
  return (
    <Container>
      <Typography>Your Expo push token: {expoPushToken}</Typography>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Typography>
          Title: {notification && notification.request.content.title}{' '}
        </Typography>
        <Typography>
          Body: {notification && notification.request.content.body}
        </Typography>
        <Typography>
          Data:{' '}
          {notification && JSON.stringify(notification.request.content.data)}
        </Typography>
      </View>
      <Button
        title='Press to Send Notification'
        onPress={async () => {
          await sendPushNotification(expoPushToken ?? '');
        }}
      />
    </Container>
  );
}
