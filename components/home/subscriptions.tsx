import { View } from 'react-native';
import { FC } from 'react';
import Subscription from '@/types/Subscription';
import Card from '../ui/card';
import Typography from '../ui/typography';
import SubscriptionList from '../subscription/subscription-list';

interface SubscriptionsProps {
  subscriptions: Subscription[];
  isLoading?: boolean;
}

const Subscriptions: FC<SubscriptionsProps> = ({ subscriptions }) => {
  return (
    <View style={{ marginTop: 16, flex: 1 }}>
      <Card>
        <Typography size='xl' weight='bold' style={{ marginBottom: 8 }}>
          Active Subscriptions
        </Typography>
        <SubscriptionList subs={subscriptions} />
      </Card>
    </View>
  );
};

export default Subscriptions;
