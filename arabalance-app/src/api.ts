import { Platform } from 'react-native';

export type OrderSummary = {
  orders: Array<{
    id: string;
    productName: string;
    supplyDays: number;
    orderedAt: string;
    remainingDays: number;
  }>;
  minRemainingDays: number;
  repurchaseSuggested: boolean;
};

function getApiHost(): string {
  if (process.env.EXPO_PUBLIC_API_HOST) {
    return process.env.EXPO_PUBLIC_API_HOST;
  }
  // Android 模擬器用 10.0.2.2 連到電腦本機；iOS 模擬器與 Web 用 localhost
  if (Platform.OS === 'android') return '10.0.2.2';
  return 'localhost';
}

const PORT = process.env.EXPO_PUBLIC_API_PORT || '3000';

export function getApiBaseUrl(): string {
  return `http://${getApiHost()}:${PORT}`;
}

export async function fetchOrderSummary(): Promise<OrderSummary | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/orders`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    return (await res.json()) as OrderSummary;
  } catch {
    return null;
  }
}
