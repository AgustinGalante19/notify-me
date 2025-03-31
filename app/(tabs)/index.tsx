import * as Notifications from 'expo-notifications';
import Container from '@/components/ui/container';
import Header from '@/components/home/header';
import Consumption from '@/components/home/consumption';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  return (
    <Container>
      <Header />
      <Consumption />
    </Container>
  );
}
