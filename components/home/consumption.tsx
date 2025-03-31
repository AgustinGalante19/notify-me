import React from 'react';
import Card from './card';
import Typography from '../ui/typography';
import { View } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';
import Button from '../ui/button';
import AntDesign from '@expo/vector-icons/AntDesign';

const Consumption = () => {
  return (
    <View style={{ marginTop: 16 }}>
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
              <Typography weight='700'>27.906,25</Typography>
              <Typography color={Colors.lightGray}>$</Typography>
            </View>
            <Typography color={Colors.lightGray} size='sm'>
              5 active subscriptions
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
