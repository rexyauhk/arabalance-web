import { useCallback, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import {
  ActivityIndicator,
  Button,
  Card,
  Text,
} from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import type { RootTabParamList } from '../types/navigation';
import { fetchOrderSummary } from '../api';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

const RING_SIZE = 180;
const RING_STROKE = 14;
const RADIUS = (RING_SIZE - RING_STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const MOCK_GLUCOSE = 112;
const RING_PROGRESS = 0.56;

export function HomeScreen({ navigation }: Props) {
  const [loading, setLoading] = useState(true);
  const [repurchaseUrgent, setRepurchaseUrgent] = useState(false);
  const [minDays, setMinDays] = useState<number | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      setLoading(true);
      fetchOrderSummary().then((data) => {
        if (cancelled) return;
        if (data) {
          setRepurchaseUrgent(data.repurchaseSuggested);
          setMinDays(data.minRemainingDays);
        } else {
          setRepurchaseUrgent(false);
          setMinDays(null);
        }
        setLoading(false);
      });
      return () => {
        cancelled = true;
      };
    }, [])
  );

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoRow}>
          <Image
            source={require('../../assets/arabalance-logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.headerWrap}>
          <Text style={styles.greeting}>Good Evening, Sarah</Text>
        </View>

        <View style={styles.tipPill}>
          <Ionicons name="leaf-outline" size={16} color="#5E5E5E" />
          <Text style={styles.tipText}>
            "Balance is not something you find, it's something you create."
          </Text>
        </View>

        <View style={styles.balanceBlock}>
          <View style={styles.ringWrap}>
            <Svg width={RING_SIZE} height={RING_SIZE} style={styles.ringSvg}>
              <Circle
                cx={RING_SIZE / 2}
                cy={RING_SIZE / 2}
                r={RADIUS}
                stroke="#E9E7E1"
                strokeWidth={RING_STROKE}
                fill="transparent"
              />
              <Circle
                cx={RING_SIZE / 2}
                cy={RING_SIZE / 2}
                r={RADIUS}
                stroke="#1D3B2F"
                strokeWidth={RING_STROKE}
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - RING_PROGRESS)}
                transform={`rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
              />
            </Svg>
            <View style={styles.ringCenter}>
              <Text style={styles.glucoseValue}>{MOCK_GLUCOSE}</Text>
              <Text style={styles.glucoseUnit}>mg/dL</Text>
              <Text style={styles.normalLabel}>NORMAL</Text>
            </View>
          </View>
          <Text style={styles.updatedLabel}>LAST UPDATED</Text>
          <Text style={styles.updatedValue}>Today, 9:30 AM</Text>
        </View>

        <Card mode="elevated" style={styles.statusCard}>
          <Card.Content style={styles.statusContent}>
            <Text style={styles.statusTag}>PRODUCT STATUS</Text>
            <Text style={styles.statusTitle}>Running Low</Text>
            {loading ? (
              <View style={styles.rowCenter}>
                <ActivityIndicator color="#FFFFFF" />
                <Text style={styles.statusBody}>載入訂單資訊...</Text>
              </View>
            ) : minDays === null ? (
              <Text style={styles.statusBody}>
                無法連線後端，請確認 server 已啟動。
              </Text>
            ) : repurchaseUrgent ? (
              <Text style={styles.statusBody}>
                You have {minDays} days of AraBalance remaining.
                {'\n'}Maintain your balance - reorder today.
              </Text>
            ) : (
              <Text style={styles.statusBody}>
                You have {minDays} days of AraBalance remaining.
                {'\n'}Current stock is still sufficient.
              </Text>
            )}
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Log')}
              style={styles.reorderButton}
              labelStyle={styles.reorderLabel}
              buttonColor="#FFFFFF"
            >
              Reorder Now
            </Button>
          </Card.Content>
        </Card>

        <View style={styles.statsGrid}>
          <Card style={styles.smallCard} mode="elevated">
            <Card.Content style={styles.smallContent}>
              <Text style={styles.smallTag}>7-DAY AVERAGE</Text>
              <Text style={styles.smallValue}>118</Text>
              <Text style={styles.smallUnit}>mg/dL</Text>
            </Card.Content>
          </Card>
          <Card style={styles.smallCard} mode="elevated">
            <Card.Content style={styles.smallContent}>
              <Text style={styles.smallTag}>IN RANGE</Text>
              <Text style={styles.smallValue}>89%</Text>
              <Text style={styles.smallUnit}>This week</Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9F9F7',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#F9F9F7',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 30,
  },
  logoRow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  logoImage: {
    width: 250,
    height: 56,
  },
  headerWrap: {
    marginBottom: 14,
  },
  greeting: {
    color: '#1B3D2F',
    fontSize: 47 / 2,
    lineHeight: 54 / 2,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  tipText: {
    color: '#5B5B5B',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Inter_400Regular',
  },
  tipPill: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    minHeight: 42,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 22,
  },
  balanceBlock: {
    alignItems: 'center',
    marginBottom: 24,
  },
  ringWrap: {
    width: RING_SIZE,
    height: RING_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  ringSvg: {
    position: 'absolute',
  },
  ringCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  glucoseValue: {
    color: '#1B3D2F',
    fontSize: 50 / 2,
    lineHeight: 56 / 2,
    marginBottom: 2,
    fontFamily: 'Inter_600SemiBold',
  },
  glucoseUnit: {
    color: '#666666',
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Inter_400Regular',
  },
  normalLabel: {
    marginTop: 10,
    color: '#555555',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 1.2,
    fontFamily: 'Inter_600SemiBold',
  },
  updatedLabel: {
    marginTop: 10,
    color: '#777777',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontFamily: 'Inter_600SemiBold',
  },
  updatedValue: {
    marginTop: 4,
    color: '#4F4F4F',
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Inter_400Regular',
  },
  statusCard: {
    borderRadius: 22,
    marginBottom: 16,
    overflow: 'hidden',
    backgroundColor: '#2D5949',
  },
  statusContent: {
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  statusTag: {
    color: '#C9D9D1',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1.2,
    fontFamily: 'Inter_600SemiBold',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  statusTitle: {
    color: '#FFFFFF',
    fontSize: 34 / 2,
    lineHeight: 40 / 2,
    marginTop: 8,
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  statusBody: {
    color: '#DDEAE4',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 12,
    fontFamily: 'Inter_400Regular',
  },
  reorderButton: {
    borderRadius: 999,
  },
  reorderLabel: {
    color: '#335247',
    fontSize: 17 / 2,
    lineHeight: 20 / 2,
    fontFamily: 'Inter_600SemiBold',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  smallCard: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  smallContent: {
    paddingVertical: 10,
    minHeight: 96,
  },
  smallTag: {
    color: '#8B8B8B',
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 1.1,
    fontFamily: 'Inter_600SemiBold',
  },
  smallValue: {
    marginTop: 6,
    color: '#1B3D2F',
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Inter_600SemiBold',
  },
  smallUnit: {
    color: '#666666',
    fontSize: 13,
    lineHeight: 16,
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
  },
});
