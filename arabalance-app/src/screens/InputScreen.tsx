import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import {
  Button,
  Card,
  SegmentedButtons,
  Text,
  TextInput,
} from 'react-native-paper';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Log'>;

type MealContext = 'fasting' | 'postmeal';

function evaluateGlucose(value: number): { title: string; message: string } {
  if (value > 10.0) {
    return {
      title: '血糖偏高',
      message: '血糖偏高，建議多喝水並散步',
    };
  }
  if (value < 4.0) {
    return {
      title: '血糖偏低',
      message: '血糖偏低，請補充糖分',
    };
  }
  return {
    title: '數值正常',
    message: '數值正常，請繼續保持',
  };
}

export function InputScreen({ navigation }: Props) {
  const [glucose, setGlucose] = useState('');
  const [meal, setMeal] = useState<MealContext>('fasting');

  const onSubmit = () => {
    const n = parseFloat(glucose.replace(',', '.'));
    if (Number.isNaN(n) || n <= 0) {
      Alert.alert('輸入有誤', '請輸入有效的血糖數值（mmol/L）。');
      return;
    }
    const { title, message } = evaluateGlucose(n);
    const timeLabel = meal === 'fasting' ? '空腹' : '餐後';
    Alert.alert(title, `${message}\n\n測量情境：${timeLabel}`, [
      { text: '確定', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <Card mode="elevated" style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.title}>
            血糖紀錄
          </Text>
          <Text variant="bodySmall" style={styles.hint}>
            請輸入儀器顯示之數值（單位：mmol/L）
          </Text>

          <TextInput
            label="血糖數值 (mmol/L)"
            mode="outlined"
            keyboardType="decimal-pad"
            value={glucose}
            onChangeText={setGlucose}
            style={styles.input}
            placeholder="例如：5.6"
          />

          <Text variant="labelLarge" style={styles.label}>
            測量時間
          </Text>
          <SegmentedButtons
            value={meal}
            onValueChange={(v) => setMeal(v as MealContext)}
            buttons={[
              { value: 'fasting', label: '空腹' },
              { value: 'postmeal', label: '餐後' },
            ]}
            style={styles.segmented}
          />

          <View style={styles.actions}>
            <Button mode="outlined" onPress={() => navigation.goBack()}>
              返回
            </Button>
            <Button mode="contained" onPress={onSubmit} icon="check">
              送出並取得建議
            </Button>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  card: { backgroundColor: '#FFFFFF' },
  title: { color: '#0D47A1', marginBottom: 4 },
  hint: { color: '#607D8B', marginBottom: 16 },
  input: { marginBottom: 16, backgroundColor: '#FFFFFF' },
  label: { marginBottom: 8, color: '#1A237E' },
  segmented: { marginBottom: 20 },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    gap: 8,
  },
});
