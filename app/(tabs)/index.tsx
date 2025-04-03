import * as Notifications from 'expo-notifications';
import Container from '@/components/ui/container';
import Header from '@/components/home/header';
import Consumption from '@/components/home/consumption';
import { useEffect, useState } from 'react';
import Subscription from '@/types/Subscription';
import fetcher from '@/services/fetcher';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const subs = await fetcher('/subscriptions');
      setSubscriptions(subs);
    };
    getSubscriptions();
  }, []);

  return (
    <Container>
      <Header />
      <Consumption subscriptions={subscriptions} />
    </Container>
  );
}
