import { FC, useMemo } from 'react';
import { View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';
import Typography from '@/components/ui/typography';
import Button from '@/components/ui/button';
import Card from '../ui/card';
import Subscription from '@/types/Subscription';

interface ConsumptionsProps {
  subscriptions: Subscription[];
  isLoading?: boolean;
}

const Consumption: FC<ConsumptionsProps> = ({ subscriptions }) => {
  const stats = useMemo(() => {
    return {
      totalMount: subscriptions.reduce(
        (prev, curr) => prev + Number(curr.amount),
        0
      ),
      subsCount: subscriptions.length,
    };
  }, [subscriptions]);

  return (
    <View style={{ marginTop: 16, height: 180 }}>
      <Card>
        <Typography size='xl' weight='600'>
          Consumptions
        </Typography>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 16,
            gap: 8,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.gray,
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesome name='dollar' size={18} color={Colors.lightGray} />
          </View>
          <View>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Typography weight='700'>
                {stats.totalMount.toLocaleString()}
              </Typography>
              <Typography color={Colors.lightGray}>$</Typography>
            </View>
            <Typography color={Colors.lightGray} size='sm'>
              {stats.subsCount} active subscriptions
            </Typography>
          </View>
        </View>
        <Button
          title='Add Subscription'
          icon={<AntDesign name='plus' size={20} color={Colors.text} />}
        />
      </Card>
    </View>
  );
};

export default Consumption;
