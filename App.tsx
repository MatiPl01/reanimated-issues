import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeOut} from 'react-native-reanimated';

function App(): JSX.Element {
  const [displayed, setDisplayed] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.75}
          onPress={() => {
            setDisplayed(!displayed);
          }}>
          <Text style={styles.buttonText}>{displayed ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>

        {displayed && (
          <View style={styles.parent}>
            {/* Animated child component with exiting animation */}
            <Animated.View style={styles.animatedChild} exiting={FadeOut} />
            {/* Another child component without exiting animation */}
            <View style={styles.anotherChild} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  button: {
    backgroundColor: '#06196d',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  parent: {
    height: 300,
    backgroundColor: '#96cae5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedChild: {
    width: 100,
    height: 100,
    backgroundColor: '#06196d',
    borderRadius: 10,
  },
  anotherChild: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default App;
