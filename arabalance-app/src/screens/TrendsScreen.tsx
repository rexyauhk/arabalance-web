import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Text } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../types/navigation';

const screenWidth = Dimensions.get('window').width;

const glucoseData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{ data: [116, 122, 108, 119, 114, 126, 111] }],
};

type Props = BottomTabScreenProps<RootTabParamList, 'Trends'>;

export function TrendsScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.topRow}>
        <Ionicons
          name="chevron-back"
          size={22}
          color="#1B3D2F"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.pageTitle}>Trends</Text>
      </View>

      <View style={styles.segmentWrap}>
        <View style={[styles.segmentItem, styles.segmentItemActive]}>
          <Text style={styles.segmentActiveText}>Week</Text>
        </View>
        <View style={styles.segmentItem}>
          <Text style={styles.segmentText}>Month</Text>
        </View>
        <View style={styles.segmentItem}>
          <Text style={styles.segmentText}>6 Months</Text>
        </View>
        <View style={styles.segmentItem}>
          <Text style={styles.segmentText}>Year</Text>
        </View>
      </View>

      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.cardContent}>
          <Text style={styles.caption}>AVERAGE</Text>
          <View style={styles.averageRow}>
            <Text style={styles.averageValue}>115.7</Text>
            <Text style={styles.averageUnit}>mg/dL</Text>
          </View>
          <Text style={styles.dateLabel}>Mar 18 - 24</Text>
          <LineChart
            data={glucoseData}
            width={screenWidth - 76}
            height={220}
            bezier
            withDots
            withInnerLines={false}
            withOuterLines={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            withShadow={false}
            fromZero={false}
            yAxisSuffix=""
            yAxisLabel=""
            chartConfig={{
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              color: () => '#1F4E3D',
              labelColor: () => '#666666',
              strokeWidth: 3,
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: '#1F4E3D',
                fill: '#1F4E3D',
              },
              propsForBackgroundLines: {
                strokeWidth: 0,
              },
              fillShadowGradientOpacity: 0,
              decimalPlaces: 1,
            }}
            style={styles.chart}
          />
        </Card.Content>
      </Card>

      <Text style={styles.insightHeader}>INSIGHTS</Text>
      <Card style={styles.insightCard} mode="elevated">
        <Card.Content style={styles.insightContent}>
          <View style={styles.iconBubble}>
            <Ionicons name="trending-down-outline" size={16} color="#657D74" />
          </View>
          <View style={styles.insightTextWrap}>
            <Text style={styles.insightTitle}>Improved Control</Text>
            <Text style={styles.insightBody}>
              Your average blood sugar decreased by 8% this week. Keep up the great
              work!
            </Text>
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.insightCard} mode="elevated">
        <Card.Content style={styles.insightContent}>
          <View style={[styles.iconBubble, styles.iconBubbleAlt]}>
            <Ionicons name="pulse-outline" size={16} color="#A69E73" />
          </View>
          <View style={styles.insightTextWrap}>
            <Text style={styles.insightTitle}>Consistency Streak</Text>
            <Text style={styles.insightBody}>
              You've logged readings 21 days in a row. Consistency is key to balance.
            </Text>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9F9F7',
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  pageTitle: {
    color: '#1B3D2F',
    fontSize: 42 / 2,
    lineHeight: 48 / 2,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  segmentWrap: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 4,
    marginBottom: 14,
  },
  segmentItem: {
    flex: 1,
    minHeight: 34,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentItemActive: {
    backgroundColor: '#F4F4F2',
  },
  segmentText: {
    color: '#7A7A7A',
    fontSize: 13,
    fontFamily: 'Inter_600SemiBold',
  },
  segmentActiveText: {
    color: '#1B3D2F',
    fontSize: 13,
    fontFamily: 'Inter_600SemiBold',
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  cardContent: {
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  caption: {
    color: '#7A7A7A',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1.1,
    marginBottom: 8,
    marginLeft: 10,
    fontFamily: 'Inter_600SemiBold',
  },
  averageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginLeft: 10,
  },
  averageValue: {
    color: '#252529',
    fontSize: 43 / 2,
    lineHeight: 48 / 2,
    fontFamily: 'Inter_600SemiBold',
  },
  averageUnit: {
    color: '#55555A',
    fontSize: 19 / 2,
    lineHeight: 24 / 2,
    marginBottom: 3,
    fontFamily: 'Inter_600SemiBold',
  },
  dateLabel: {
    color: '#6E6E71',
    fontSize: 14,
    lineHeight: 18,
    marginTop: 2,
    marginBottom: 8,
    marginLeft: 10,
    fontFamily: 'Inter_400Regular',
  },
  chart: {
    borderRadius: 16,
    paddingRight: 0,
  },
  insightHeader: {
    color: '#545454',
    fontSize: 20 / 2,
    lineHeight: 24 / 2,
    letterSpacing: 1.2,
    marginBottom: 10,
    marginLeft: 2,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  insightCard: {
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  insightContent: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 14,
  },
  iconBubble: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#ECEFED',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  iconBubbleAlt: {
    backgroundColor: '#F2EFE5',
  },
  insightTextWrap: {
    flex: 1,
  },
  insightTitle: {
    color: '#24372F',
    fontSize: 31 / 2,
    lineHeight: 37 / 2,
    marginBottom: 4,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  insightBody: {
    color: '#666666',
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Inter_400Regular',
  },
});
