import * as Notifications from 'expo-notifications';
import Container from '@/components/ui/container';
import Header from '@/components/home/header';
import Consumption from '@/components/home/consumption';
import { useEffect, useState } from 'react';
import Subscription from '@/types/Subscription';
import ErrorAlert from '@/components/ui/error-alert';
import { useErrorAlert } from '@/hooks/useErrorAlert';
import { getSubscriptions } from '@/services/subscriptions';
import Subscriptions from '@/components/home/subscriptions';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { changeErrorMessage, closeAlert, errorMessage, isShowed, showAlert } =
    useErrorAlert();

  useEffect(() => {
    const getSubs = async () => {
      try {
        setIsLoading(true);
        const subs = await getSubscriptions();
        setSubscriptions(subs);
      } catch {
        changeErrorMessage('Unexpected error getting subscriptions');
        showAlert();
      } finally {
        setIsLoading(false);
      }
    };
    getSubs();
  }, []);

  return (
    <Container>
      <Header />
      <ErrorAlert
        message={errorMessage}
        show={isShowed}
        handleCloseAlert={closeAlert}
      />
      <Consumption subscriptions={subscriptions} isLoading={isLoading} />
      <Subscriptions subscriptions={subscriptions} isLoading={isLoading} />
    </Container>
  );
}
