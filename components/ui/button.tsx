import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { ReactNode, FC } from 'react';
import { Colors } from '@/constants/Colors';
import Typography from './typography';

interface ButtonProps extends TouchableOpacityProps {
  title: string | ReactNode;
  icon?: ReactNode;
}
const Button: FC<ButtonProps> = ({ title, icon, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 50,
        padding: 8,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
      {...props}
    >
      {icon && <View style={{ alignSelf: 'flex-start' }}>{icon}</View>}
      <Typography color={Colors.text} weight='600' style={{ margin: 'auto' }}>
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
