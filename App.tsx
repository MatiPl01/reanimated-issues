import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Animated, {
  SharedValue,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const RECT_SIZE = 100;

function rotate(rotation: SharedValue<number>) {
  'worklet';
  updateRotation(rotation);
  return {
    transform: [{rotate: `${rotation.value}deg`}],
  };
}

function updateRotation(rotation: SharedValue<number>) {
  'worklet';
  rotation.value += 1;
}

function App(): JSX.Element {
  const rotation = useSharedValue(0);

  useEffect(() => {
    setInterval(() => {
      // rotate(rotation); // works on the JS thread
      runOnUI(rotate)(rotation); // doesn't work on the UI thread
    }, 1);
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotation.value}deg`}],
  }));

  return (
    <SafeAreaView>
      <Animated.View style={[styles.rect, animatedStyle]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rect: {
    width: RECT_SIZE,
    height: RECT_SIZE,
    backgroundColor: '#041557',
    borderRadius: RECT_SIZE / 10,
  },
});

export default App;
