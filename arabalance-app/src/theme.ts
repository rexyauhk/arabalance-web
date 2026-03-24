import { MD3LightTheme } from 'react-native-paper';

/** Arabalance 品牌風格：米白背景、森林綠主色 */
export const appTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1B3D2F',
    primaryContainer: '#E6EFEA',
    secondary: '#34A853',
    secondaryContainer: '#E8F5EA',
    surface: '#FFFFFF',
    background: '#F9F9F7',
    error: '#C62828',
    onPrimary: '#F9F9F7',
    onSurface: '#1B3D2F',
    outline: '#D8D8D3',
  },
};
