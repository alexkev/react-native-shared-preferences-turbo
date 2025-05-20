import { Platform, Settings } from 'react-native';
import SharedPreferencesTurbo from './NativeSharedPreferencesTurbo';

export function setItem(key: string, value: string): void {
  if (Platform.OS === 'ios') {
    Settings.set({
      [key]: value,
    });
    return;
  } else if (Platform.OS === 'android') {
    SharedPreferencesTurbo?.setItem(key, value);
    return;
  }
  console.warn('Platform not supported');
  return;
}

export function getItem(key: string): string | null {
  if (Platform.OS === 'ios') {
    return Settings.get(key);
  } else if (Platform.OS === 'android') {
    return SharedPreferencesTurbo?.getItem(key) ?? null;
  }
  console.warn('Platform not supported');
  return null;
}

export function clear(): void {
  if (Platform.OS === 'ios') {
    console.warn('Platform not supported for clear');
    return;
  } else if (Platform.OS === 'android') {
    SharedPreferencesTurbo?.clear();
    return;
  }
  console.warn('Platform not supported');
}
