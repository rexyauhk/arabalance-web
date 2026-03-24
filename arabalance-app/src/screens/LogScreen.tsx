import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Card, Menu, Text, TextInput } from 'react-native-paper';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Log'>;
type MealKey = 'Breakfast' | 'Lunch' | 'Dinner';

function getFeedback(value: number): string {
  if (value > 10.0) return '血糖偏高，建議多喝水並散步';
  if (value < 4.0) return '血糖偏低，請補充糖分';
  return '數值正常，請繼續保持';
}

function formatDate(date: Date): string {
  const d = `${date.getDate()}`.padStart(2, '0');
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

function formatTime(hours: number, minutes: number): string {
  const period = hours < 12 ? '上午' : '下午';
  const h12 = hours % 12 === 0 ? 12 : hours % 12;
  const m = `${minutes}`.padStart(2, '0');
  return `${period} ${h12}:${m}`;
}

type MealSectionProps = {
  meal: MealKey;
  expandedMeal: MealKey;
  onToggle: (meal: MealKey) => void;
  preGlucose: string;
  postGlucose: string;
  preTime: string;
  postTime: string;
  onChangePreGlucose: (value: string) => void;
  onChangePostGlucose: (value: string) => void;
  onOpenTimePicker: (target: 'pre' | 'post', meal: MealKey) => void;
  medicationMenuVisible: boolean;
  onOpenMedicationMenu: () => void;
  onCloseMedicationMenu: () => void;
  medicationDose: string;
  onSelectMedication: (dose: string) => void;
};

function MealSection({
  meal,
  expandedMeal,
  onToggle,
  preGlucose,
  postGlucose,
  preTime,
  postTime,
  onChangePreGlucose,
  onChangePostGlucose,
  onOpenTimePicker,
  medicationMenuVisible,
  onOpenMedicationMenu,
  onCloseMedicationMenu,
  medicationDose,
  onSelectMedication,
}: MealSectionProps) {
  const isExpanded = expandedMeal === meal;

  return (
    <View style={styles.mealPanel}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onToggle(meal)} style={styles.mealHeader}>
        <Text style={styles.mealTitle}>{meal}</Text>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color="#8A8A8A"
        />
      </TouchableOpacity>

      {isExpanded ? (
        <View style={styles.expandedBody}>
          <Text style={styles.groupLabel}>{`PRE ${meal.toUpperCase()}`}</Text>
          <View style={styles.inputRow}>
            <TextInput
              mode="outlined"
              value={preGlucose}
              onChangeText={onChangePreGlucose}
              placeholder="Blood Sugar"
              keyboardType="decimal-pad"
              style={styles.inlineInput}
              contentStyle={styles.inlineInputContent}
              outlineStyle={styles.inlineOutline}
              right={<TextInput.Affix text="mg/dL" />}
            />
            <TextInput
              mode="outlined"
              value={preTime}
              editable={false}
              style={styles.inlineInput}
              contentStyle={styles.inlineInputContent}
              outlineStyle={styles.inlineOutline}
              right={
                <TextInput.Icon
                  icon="clock-outline"
                  onPress={() => onOpenTimePicker('pre', meal)}
                />
              }
            />
          </View>

          <Text style={styles.groupLabel}>{`POST ${meal.toUpperCase()}`}</Text>
          <View style={styles.inputRow}>
            <TextInput
              mode="outlined"
              value={postGlucose}
              onChangeText={onChangePostGlucose}
              placeholder="Blood Sugar"
              keyboardType="decimal-pad"
              style={styles.inlineInput}
              contentStyle={styles.inlineInputContent}
              outlineStyle={styles.inlineOutline}
              right={<TextInput.Affix text="mg/dL" />}
            />
            <TextInput
              mode="outlined"
              value={postTime}
              editable={false}
              style={styles.inlineInput}
              contentStyle={styles.inlineInputContent}
              outlineStyle={styles.inlineOutline}
              right={
                <TextInput.Icon
                  icon="clock-outline"
                  onPress={() => onOpenTimePicker('post', meal)}
                />
              }
            />
          </View>

          <Text style={styles.groupLabel}>MEDICATION</Text>
          <Menu
            visible={medicationMenuVisible}
            onDismiss={onCloseMedicationMenu}
            anchor={
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.dropdownField}
                onPress={onOpenMedicationMenu}
              >
                <Text style={styles.dropdownText}>{medicationDose}</Text>
                <Ionicons name="chevron-down" size={16} color="#8A8A8A" />
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => onSelectMedication('1 pack')} title="1 pack" />
            <Menu.Item onPress={() => onSelectMedication('2 packs')} title="2 packs" />
            <Menu.Item onPress={() => onSelectMedication('3 packs')} title="3 packs" />
          </Menu>
        </View>
      ) : null}
    </View>
  );
}

export function LogScreen({ navigation }: Props) {
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 2, 24));
  const [preBreakfastGlucose, setPreBreakfastGlucose] = useState('');
  const [postBreakfastGlucose, setPostBreakfastGlucose] = useState('');
  const [preBreakfastTime, setPreBreakfastTime] = useState('下午 12:30');
  const [postBreakfastTime, setPostBreakfastTime] = useState('下午 12:30');
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [timeTarget, setTimeTarget] = useState<'pre' | 'post'>('post');
  const [medicationMenuVisible, setMedicationMenuVisible] = useState(false);
  const [medicationDose, setMedicationDose] = useState('Select');
  const [medicationMenuVisibleLunch, setMedicationMenuVisibleLunch] = useState(false);
  const [medicationDoseLunch, setMedicationDoseLunch] = useState('Select');
  const [medicationMenuVisibleDinner, setMedicationMenuVisibleDinner] = useState(false);
  const [medicationDoseDinner, setMedicationDoseDinner] = useState('Select');
  const [expandedMeal, setExpandedMeal] = useState<MealKey>('Breakfast');
  const [preLunchGlucose, setPreLunchGlucose] = useState('');
  const [postLunchGlucose, setPostLunchGlucose] = useState('');
  const [preLunchTime, setPreLunchTime] = useState('下午 12:30');
  const [postLunchTime, setPostLunchTime] = useState('下午 12:30');
  const [preDinnerGlucose, setPreDinnerGlucose] = useState('');
  const [postDinnerGlucose, setPostDinnerGlucose] = useState('');
  const [preDinnerTime, setPreDinnerTime] = useState('下午 12:30');
  const [postDinnerTime, setPostDinnerTime] = useState('下午 12:30');

  const submitLog = () => {
    const candidate =
      preBreakfastGlucose ||
      postBreakfastGlucose ||
      preLunchGlucose ||
      postLunchGlucose ||
      preDinnerGlucose ||
      postDinnerGlucose;
    const value = parseFloat(candidate.replace(',', '.'));
    if (Number.isNaN(value) || value <= 0) {
      Alert.alert('輸入有誤', '請輸入有效的血糖數值（mmol/L）');
      return;
    }
    Alert.alert(
      '本次記錄完成',
      `${getFeedback(value)}\n\n日期：${formatDate(selectedDate)}\nMedication: ${medicationDose}`
    );
  };

  const openTimePicker = (target: 'pre' | 'post', meal: MealKey) => {
    setTimeTarget(target);
    setExpandedMeal(meal);
    setTimePickerOpen(true);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.topRow}>
        <Ionicons
          name="chevron-back"
          size={22}
          color="#1B3D2F"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.pageTitle}>Daily Logbook</Text>
      </View>

      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.cardContent}>
          <Text style={styles.sectionTag}>TARGET BLOOD GLUCOSE RANGES</Text>
          <View style={styles.rangeRow}>
            <Text style={styles.rangeLabel}>Fasting:</Text>
            <Text style={styles.rangeValue}>70-100 mg/dL</Text>
          </View>
          <View style={styles.rangeRow}>
            <Text style={styles.rangeLabel}>Pre meal:</Text>
            <Text style={styles.rangeValue}>70-130 mg/dL</Text>
          </View>
          <View style={styles.rangeRow}>
            <Text style={styles.rangeLabel}>Post meal:</Text>
            <Text style={styles.rangeValue}>{'<180 mg/dL'}</Text>
          </View>
        </Card.Content>
      </Card>

      <Text style={styles.formTitle}>SELECT DATE</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.datePickerButton}
        onPress={() => setDatePickerOpen(true)}
      >
        <Text style={styles.datePickerText}>{formatDate(selectedDate)}</Text>
        <Ionicons name="calendar-outline" size={20} color="#5C5A62" />
      </TouchableOpacity>

      <MealSection
        meal="Breakfast"
        expandedMeal={expandedMeal}
        onToggle={setExpandedMeal}
        preGlucose={preBreakfastGlucose}
        postGlucose={postBreakfastGlucose}
        preTime={preBreakfastTime}
        postTime={postBreakfastTime}
        onChangePreGlucose={setPreBreakfastGlucose}
        onChangePostGlucose={setPostBreakfastGlucose}
        onOpenTimePicker={openTimePicker}
        medicationMenuVisible={medicationMenuVisible}
        onOpenMedicationMenu={() => setMedicationMenuVisible(true)}
        onCloseMedicationMenu={() => setMedicationMenuVisible(false)}
        medicationDose={medicationDose}
        onSelectMedication={(dose) => {
          setMedicationDose(dose);
          setMedicationMenuVisible(false);
        }}
      />
      <MealSection
        meal="Lunch"
        expandedMeal={expandedMeal}
        onToggle={setExpandedMeal}
        preGlucose={preLunchGlucose}
        postGlucose={postLunchGlucose}
        preTime={preLunchTime}
        postTime={postLunchTime}
        onChangePreGlucose={setPreLunchGlucose}
        onChangePostGlucose={setPostLunchGlucose}
        onOpenTimePicker={openTimePicker}
        medicationMenuVisible={medicationMenuVisibleLunch}
        onOpenMedicationMenu={() => setMedicationMenuVisibleLunch(true)}
        onCloseMedicationMenu={() => setMedicationMenuVisibleLunch(false)}
        medicationDose={medicationDoseLunch}
        onSelectMedication={(dose) => {
          setMedicationDoseLunch(dose);
          setMedicationMenuVisibleLunch(false);
        }}
      />
      <MealSection
        meal="Dinner"
        expandedMeal={expandedMeal}
        onToggle={setExpandedMeal}
        preGlucose={preDinnerGlucose}
        postGlucose={postDinnerGlucose}
        preTime={preDinnerTime}
        postTime={postDinnerTime}
        onChangePreGlucose={setPreDinnerGlucose}
        onChangePostGlucose={setPostDinnerGlucose}
        onOpenTimePicker={openTimePicker}
        medicationMenuVisible={medicationMenuVisibleDinner}
        onOpenMedicationMenu={() => setMedicationMenuVisibleDinner(true)}
        onCloseMedicationMenu={() => setMedicationMenuVisibleDinner(false)}
        medicationDose={medicationDoseDinner}
        onSelectMedication={(dose) => {
          setMedicationDoseDinner(dose);
          setMedicationMenuVisibleDinner(false);
        }}
      />

      <View style={styles.actionRow}>
        <Button
          mode="contained"
          onPress={submitLog}
          style={styles.primaryButton}
          labelStyle={styles.primaryButtonLabel}
          contentStyle={styles.primaryContent}
        >
          Save Today's Log
        </Button>
      </View>

      <DatePickerModal
        locale="zh"
        mode="single"
        visible={datePickerOpen}
        date={selectedDate}
        onDismiss={() => setDatePickerOpen(false)}
        onConfirm={({ date }) => {
          if (date) setSelectedDate(date);
          setDatePickerOpen(false);
        }}
      />
      <TimePickerModal
        visible={timePickerOpen}
        onDismiss={() => setTimePickerOpen(false)}
        onConfirm={({ hours, minutes }) => {
          const formatted = formatTime(hours, minutes);
          if (expandedMeal === 'Breakfast') {
            if (timeTarget === 'pre') setPreBreakfastTime(formatted);
            else setPostBreakfastTime(formatted);
          } else if (expandedMeal === 'Lunch') {
            if (timeTarget === 'pre') setPreLunchTime(formatted);
            else setPostLunchTime(formatted);
          } else {
            if (timeTarget === 'pre') setPreDinnerTime(formatted);
            else setPostDinnerTime(formatted);
          }
          setTimePickerOpen(false);
        }}
        hours={12}
        minutes={30}
        use24HourClock={false}
        locale="zh"
      />
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
    paddingBottom: 26,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 2,
    marginBottom: 16,
  },
  pageTitle: {
    color: '#1B3D2F',
    fontSize: 42 / 2,
    lineHeight: 48 / 2,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  cardContent: {
    paddingVertical: 12,
  },
  sectionTag: {
    color: '#676767',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1.1,
    marginBottom: 10,
    fontFamily: 'Inter_600SemiBold',
  },
  rangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rangeLabel: {
    color: '#515151',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
  rangeValue: {
    color: '#333333',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Inter_600SemiBold',
  },
  formTitle: {
    color: '#777777',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1.1,
    marginBottom: 8,
    paddingHorizontal: 2,
    fontFamily: 'Inter_600SemiBold',
  },
  dateInput: {
    marginBottom: 14,
    backgroundColor: '#FFFFFF',
  },
  dateContent: {
    color: '#373737',
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
  },
  datePickerButton: {
    minHeight: 54,
    borderWidth: 1,
    borderColor: '#DFDFDA',
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePickerText: {
    color: '#373737',
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
  },
  mealCard: {
    display: 'none',
  },
  mealPanel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 12,
    overflow: 'hidden',
  },
  mealHeader: {
    minHeight: 54,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mealTitle: {
    color: '#2D2D2D',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Inter_600SemiBold',
  },
  expandedBody: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0ED',
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 12,
  },
  groupLabel: {
    color: '#686868',
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 1.2,
    marginBottom: 8,
    fontFamily: 'Inter_600SemiBold',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  inlineInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inlineInputContent: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  inlineOutline: {
    borderRadius: 18,
    borderColor: '#DFDFDA',
  },
  dropdownField: {
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#DFDFDA',
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  dropdownText: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  inputOutline: {
    borderRadius: 18,
    borderColor: '#ECEBE7',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderRadius: 999,
    backgroundColor: '#1B3D2F',
    width: '100%',
  },
  primaryButtonLabel: {
    color: '#F9F9F7',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  primaryContent: {
    minHeight: 56,
  },
});
