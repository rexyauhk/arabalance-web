import { ScrollView, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<RootTabParamList, 'Profile'>;

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoRow}>
      <Ionicons name={icon} size={20} color="#7A7A7A" />
      <View style={styles.infoTextWrap}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

export function ProfileScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.topRow}>
        <Ionicons
          name="chevron-back"
          size={22}
          color="#1B3D2F"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.pageTitle}>Profile</Text>
      </View>

      <View style={styles.userTop}>
        <Avatar.Icon
          size={84}
          icon="account-outline"
          color="#1B3D2F"
          style={styles.avatar}
        />
        <Text style={styles.userName}>Sarah Chen</Text>
        <Text style={styles.memberSince}>Member since Jan 2025</Text>
      </View>

      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.cardContent}>
          <Text style={styles.sectionTag}>PERSONAL INFORMATION</Text>
          <InfoRow icon="mail-outline" label="Email" value="sarah.chen@email.com" />
          <View style={styles.divider} />
          <InfoRow icon="call-outline" label="Phone" value="+1 (555) 123-4567" />
          <View style={styles.divider} />
          <InfoRow icon="calendar-outline" label="Date of Birth" value="March 15, 1988" />
        </Card.Content>
      </Card>

      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.cardContent}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTag}>TARGET BLOOD GLUCOSE RANGES</Text>
            <Text style={styles.editText}>Edit</Text>
          </View>
          <View style={styles.rangeBlock}>
            <Text style={styles.rangeLabel}>Fasting</Text>
            <Text style={styles.rangeValue}>70-100 mg/dL</Text>
          </View>
          <View style={styles.rangeBlock}>
            <Text style={styles.rangeLabel}>Pre Meal</Text>
            <Text style={styles.rangeValue}>70-130 mg/dL</Text>
          </View>
          <View style={styles.rangeBlock}>
            <Text style={styles.rangeLabel}>Post Meal</Text>
            <Text style={styles.rangeValue}>{'<180 mg/dL'}</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.cardContent}>
          <Text style={styles.sectionTag}>SETTINGS</Text>
          <InfoRow icon="notifications-outline" label="Notifications" value="Manage your alerts" />
          <View style={styles.divider} />
          <InfoRow icon="shield-outline" label="Privacy & Security" value="Control your data" />
          <View style={styles.divider} />
          <InfoRow icon="help-circle-outline" label="Help & Support" value="Get assistance" />
        </Card.Content>
      </Card>

      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.cardContent}>
          <Text style={styles.subscriptionTitle}>Arabalance Subscription</Text>
          <Text style={styles.deliveryText}>Next Delivery: In 7 days</Text>
          <Button
            mode="outlined"
            style={styles.outlineButton}
            textColor="#1B3D2F"
            onPress={() => {}}
          >
            Manage Subscription
          </Button>
        </Card.Content>
      </Card>

      <Button
        mode="outlined"
        textColor="#B54A67"
        style={styles.signOutButton}
        labelStyle={styles.signOutLabel}
      >
        Sign Out
      </Button>
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
    marginBottom: 12,
  },
  userTop: {
    alignItems: 'center',
    marginBottom: 14,
  },
  avatar: {
    backgroundColor: '#ECECEC',
  },
  pageTitle: {
    color: '#1B3D2F',
    fontSize: 42 / 2,
    lineHeight: 48 / 2,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  userName: {
    color: '#1B3D2F',
    fontSize: 39 / 2,
    lineHeight: 46 / 2,
    marginTop: 12,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  memberSince: {
    color: '#686868',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
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
    color: '#666666',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1.1,
    marginBottom: 10,
    fontFamily: 'Inter_600SemiBold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: 58,
  },
  infoTextWrap: {
    flex: 1,
  },
  infoLabel: {
    color: '#6E6E6E',
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Inter_400Regular',
  },
  infoValue: {
    color: '#333333',
    fontSize: 31 / 2,
    lineHeight: 37 / 2,
    marginTop: 2,
    fontFamily: 'Inter_600SemiBold',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0ED',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editText: {
    color: '#3E5550',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  rangeBlock: {
    marginBottom: 12,
  },
  rangeLabel: {
    color: '#6E6E6E',
    fontSize: 14,
    lineHeight: 19,
    marginBottom: 3,
    fontFamily: 'Inter_400Regular',
  },
  rangeValue: {
    color: '#313131',
    fontSize: 34 / 2,
    lineHeight: 40 / 2,
    fontFamily: 'Inter_600SemiBold',
  },
  subscriptionTitle: {
    color: '#1B3D2F',
    fontSize: 17,
    lineHeight: 22,
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_600SemiBold',
  },
  deliveryText: {
    color: '#666666',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
    fontFamily: 'Inter_400Regular',
  },
  outlineButton: {
    borderColor: '#1B3D2F',
    borderWidth: 1,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  signOutButton: {
    borderColor: '#E7C4CF',
    borderWidth: 1.2,
    borderRadius: 999,
    marginTop: 4,
    marginBottom: 10,
  },
  signOutLabel: {
    fontFamily: 'Inter_600SemiBold',
  },
});
