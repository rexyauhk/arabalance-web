import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { PlayfairDisplay_600SemiBold } from '@expo-google-fonts/playfair-display';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { appTheme } from './src/theme';
import { HomeScreen } from './src/screens/HomeScreen';
import { LogScreen } from './src/screens/LogScreen';
import { TrendsScreen } from './src/screens/TrendsScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import type { RootTabParamList } from './src/types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    PlayfairDisplay_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider theme={appTheme}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#1B3D2F',
                tabBarInactiveTintColor: '#9A9A95',
                tabBarStyle: {
                  backgroundColor: '#FFFFFF',
                  borderTopColor: '#ECEBE7',
                  borderTopWidth: 1,
                  height: 70,
                  paddingBottom: 10,
                  paddingTop: 8,
                },
                tabBarLabelStyle: {
                  fontFamily: 'Inter_400Regular',
                  fontSize: 13,
                },
                tabBarIcon: ({ color, size, focused }) => {
                  const iconName =
                    route.name === 'Home'
                      ? focused
                        ? 'home'
                        : 'home-outline'
                      : route.name === 'Log'
                        ? focused
                          ? 'create'
                          : 'create-outline'
                        : route.name === 'Trends'
                          ? focused
                            ? 'analytics'
                            : 'analytics-outline'
                          : focused
                            ? 'person'
                            : 'person-outline';
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Log" component={LogScreen} />
              <Tab.Screen name="Trends" component={TrendsScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          </NavigationContainer>
          <StatusBar style="dark" />
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
