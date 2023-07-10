import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';

const RECT_SIZE = 100;

function App(): JSX.Element {
  const x = useSharedValue(0);
  const {width} = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: x.value}],
  }));

  const gesture = Gesture.Pan()
    .onChange(e => {
      x.value += e.changeX;
    })
    .onEnd(({velocityX}) => {
      console.log(velocityX);
      x.value = withDecay({
        velocity: velocityX,
        clamp: [0, width - RECT_SIZE],
        rubberBandEffect: true,
        deceleration: 0.98,
        rubberBandFactor: 3,
      });
    });

  useAnimatedReaction(
    () => x.value,
    value => {
      console.log(value);
    },
  );

  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <View>
            <Animated.View style={[styles.rect, animatedStyle]} />
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  rect: {
    width: RECT_SIZE,
    height: RECT_SIZE,
    backgroundColor: '#041557',
    borderRadius: RECT_SIZE / 10,
  },
});

export default App;
