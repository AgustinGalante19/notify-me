import { Text, TextProps } from 'react-native';
import { ReactNode, FC } from 'react';
import { Colors } from '@/constants/Colors';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type TypographyProps = TextProps & {
  children: ReactNode;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'xl' | 'xxl';
  weight?: TextStyle['fontWeight'];
};

const Typography: FC<TypographyProps> = ({
  children,
  color = Colors.text,
  size = 'md',
  weight = 'normal',
  style,
  ...rest
}) => {
  const fontSize = {
    xs: 8,
    sm: 12,
    md: 16,
    xl: 20,
    xxl: 34,
  };

  return (
    <Text
      style={[
        {
          color,
          fontSize: fontSize[size],
          fontWeight: weight,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
