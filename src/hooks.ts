import {SharedValue, useDerivedValue} from 'react-native-reanimated';

export function useExampleValue(
  inputValue: SharedValue<number>,
): SharedValue<string> {
  return useDerivedValue(() => `Result: ${inputValue.value}`);
}
