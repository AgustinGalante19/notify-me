import { Colors } from '@/constants/Colors';
import React, { FC, ReactNode } from 'react';
import { StatusBar, View } from 'react-native';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 16,
        backgroundColor: Colors.background,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
