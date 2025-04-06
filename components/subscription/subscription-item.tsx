import { Image, View } from 'react-native';
import { FC } from 'react';
import Subscription from '@/types/Subscription';
import Typography from '../ui/typography';
import { Colors } from '@/constants/Colors';
import apiImage from '@/utils/api-image';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const walletColors = {
  Uala: '#5e7bd8',
  Brubank: '#614AD9',
};

const SubscriptionItem: FC<{ sub: Subscription }> = ({ sub }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginVertical: 12,
      }}
    >
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
        }}
        source={{
          uri: apiImage(sub.icon),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <View>
          <Typography weight='500'>{sub.name}</Typography>
          <Typography
            color={walletColors[sub.wallet_target as keyof typeof walletColors]}
            weight='500'
            size='sm'
          >
            {sub.wallet_target}
          </Typography>
        </View>
        <View>
          <Typography weight='500' color='#4adc72'>
            ${sub.amount.toLocaleString()}
          </Typography>
          <Typography
            color={Colors.lightGray}
            size='sm'
            style={{ textAlign: 'right' }}
          >
            {sub.charge_day} {monthNames[new Date().getMonth()]}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default SubscriptionItem;
