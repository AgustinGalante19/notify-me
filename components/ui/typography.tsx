import { Text, TextProps } from 'react-native';
import { ReactNode, FC } from 'react';
import { Colors } from '@/constants/Colors';

type TypographyProps = TextProps & {
  children: ReactNode;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'xl';
};

const Typography: FC<TypographyProps> = ({
  children,
  color = Colors.text,
  size = 'md',
  style,
  ...rest
}) => {
  const fontSize = {
    xs: 8,
    sm: 12,
    md: 16,
    xl: 24,
  };

  return (
    <Text
      style={[
        {
          color,
          fontSize: fontSize[size],
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
