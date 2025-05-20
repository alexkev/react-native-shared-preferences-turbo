import SharedPreferencesTurbo from './NativeSharedPreferencesTurbo';

export function setItem(key: string, value: string): void {
  SharedPreferencesTurbo.setItem(key, value);
}

export function getItem(key: string): string | null {
  return SharedPreferencesTurbo.getItem(key);
}
