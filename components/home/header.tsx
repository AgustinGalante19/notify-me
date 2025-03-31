import { View } from 'react-native';
import React from 'react';
import Typography from '../ui/typography';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography size='xxl' weight='bold'>
        My Subscriptions
      </Typography>
    </View>
  );
};

export default Header;
