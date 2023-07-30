import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import {
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function App(): JSX.Element {
  const dummyValue = useSharedValue(0);

  const gesture = Gesture.Pan();

  useEffect(() => {
    dummyValue.value = withTiming(1, {duration: 10000});
  }, []);

  useAnimatedReaction(
    () => dummyValue.value,
    v => {
      console.log(v);
    },
  );

  return (
    <GestureHandlerRootView style={styles.root}>
      <GestureDetector gesture={gesture}>
        <View style={styles.view} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  view: {
    flex: 1,
    margin: 20,
    backgroundColor: '#06196D',
  },
});
