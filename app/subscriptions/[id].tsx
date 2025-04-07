import Container from '@/components/ui/container';
import Typography from '@/components/ui/typography';
import { useLocalSearchParams } from 'expo-router';

const DetailSubscription = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Container>
      <Typography>DetailSubscription - {id}</Typography>
    </Container>
  );
};

export default DetailSubscription;
