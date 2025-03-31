import { View } from 'react-native';
import { FC, ReactNode } from 'react';
import { Colors } from '@/constants/Colors';

const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.secondary,
        borderRadius: 24,
        padding: 16,
      }}
    >
      {children}
    </View>
  );
};

export default Card;
