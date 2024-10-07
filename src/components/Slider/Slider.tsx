import { Pressable, Text, View } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

type SliderProps = {
  status: string;
};
const Slider: React.FC<SliderProps> = ({ status }) => {
//   const isOn = useSharedValue(status === 'Online');
//   const height = useSharedValue(0);
//   const width = useSharedValue(0);
//   const trackAnimatedStyle = useAnimatedStyle(() => {
//     // Interpolate between red and green based on isOn.value

//     const color = interpolateColor(isOn.value, [0, 1], ['red', 'green']);
//     const colorValue = withTiming(color, { duration: 400 });
//     return {
//       backgroundColor: colorValue,
//       borderRadius: height.value / 2,
//     };
  
  return (
    <Pressable >
      <Animated.View style={[{ width: 120, height: 40, padding: 5 }]}>
        <Animated.View
          style={[
            {
              height: 30,
              width: 30,
              backgroundColor: '#FFFF',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default Slider;
