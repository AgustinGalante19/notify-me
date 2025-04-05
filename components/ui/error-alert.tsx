import { Colors } from '@/constants/Colors';
import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Typography from './typography';

interface ErrorAlertProps {
  message: string;
  show: boolean;
  handleCloseAlert: () => void;
}

const ErrorAlert: FC<ErrorAlertProps> = ({
  message,
  show,
  handleCloseAlert,
}) => {
  if (!show) return null;

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: Colors.error.darker,
        borderWidth: 1,
        borderColor: Colors.error.medium,
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
      }}
    >
      <Feather name='alert-triangle' size={24} color={Colors.error.light} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Text
          style={{
            color: Colors.error.light,
            textOverflow: 'auto',
          }}
        >
          {message}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 2,
          paddingHorizontal: 8,
          borderRadius: 5,
          backgroundColor: Colors.error.light,
        }}
        onPress={handleCloseAlert}
      >
        <Typography
          color={Colors.error.darker}
          weight='700'
          style={{ letterSpacing: 1 }}
          size='xs'
        >
          CLOSE
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorAlert;
