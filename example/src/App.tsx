import { useState } from 'react';
import { Text, View, StyleSheet, Button, Platform } from 'react-native';
import { setItem, getItem, clear } from 'react-native-shared-preferences-turbo';

const value = getItem('key');

export default function App() {
  const [displayValue, setDisplayValue] = useState<string | null>(value);

  return (
    <View style={styles.container}>
      <Text>Result:</Text>
      <Text>{displayValue ?? 0}</Text>
      <Button
        title="+"
        onPress={() => {
          console.log(
            '%cexample/src/App.tsx:14 value',
            'color: #007acc;',
            value
          );

          const newValue = Number(displayValue || 0) + 1;
          setItem('key', newValue.toString());
          setDisplayValue(newValue.toString());
        }}
      />
      {Platform.OS === 'android' && (
        <Button
          title="clear"
          onPress={() => {
            clear();
            setDisplayValue(null);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
