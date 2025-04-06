import { FlatList } from 'react-native';
import React, { FC } from 'react';
import Subscription from '@/types/Subscription';
import SubscriptionItem from './subscription-item';

const SubscriptionList: FC<{ subs: Subscription[] }> = ({ subs }) => {
  return (
    <FlatList
      data={subs}
      renderItem={({ item }) => <SubscriptionItem sub={item} />}
    />
  );
};

export default SubscriptionList;
