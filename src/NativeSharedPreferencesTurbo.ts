import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setItem(key: string, value: string): void;
  getItem(key: string): string | null;
  // getItems(keys: string[]): Promise<Record<string, any>>;
  // getAll(): Promise<Record<string, any>>;
  clear(): void;
  // getAllKeys(): Promise<string[]>;
  // removeItem(key: string): void;
}

export default TurboModuleRegistry.get<Spec>('SharedPreferencesTurbo');
