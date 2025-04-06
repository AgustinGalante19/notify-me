import Subscription from '@/types/Subscription';
import fetcher from '@/utils/fetcher';

export async function getSubscriptions(): Promise<Subscription[]> {
  const subscriptions: Subscription[] = await fetcher('/subscriptions');
  return subscriptions.map(
    ({ amount, charge_day, icon, id, name, wallet_target }: Subscription) => ({
      id,
      name,
      amount: Number(amount),
      charge_day,
      wallet_target,
      icon,
    })
  );
}
