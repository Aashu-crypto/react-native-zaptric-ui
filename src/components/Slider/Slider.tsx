import { Pressable, Text } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
  interpolate
} from 'react-native-reanimated';
import styles from './Slider.styles';

type SliderProps = {
  status?: boolean; 
 title?:string
};

const Slider: React.FC<SliderProps> = ({ status = false ,title}) => {
  const isOn = useSharedValue(status ? 1 : 0); // Use number instead of boolean (0 for false, 1 for true)
  const height = useSharedValue(0);
  const width = useSharedValue(0);
  // Synchronize `isOn` with the `status` prop whenever it changes
  useEffect(() => {
    isOn.value = status ? withTiming(1, { duration: 400 }) : withTiming(0, { duration: 400 });
  }, [status]);

  // Animated style for the track color
  const trackAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(isOn.value, [0, 1], ['red', 'green']);
    return {
      backgroundColor,
      borderRadius: 20, // Fixed radius value or you can use height.value / 2 if dynamic
    };
  });
const thumbStyles = useAnimatedStyle(()=>{
  const moveValue = interpolate(
    isOn.value,[0,1],[0,width.value - height.value]
  )
  const translateValue =withTiming(moveValue,{duration:400})
  return{
    transform:[{translateX:translateValue}],
    borderRadius:height.value/2
  }
})
  return (
    <Pressable
      onPress={() => {
        isOn.value = withTiming(isOn.value === 1 ? 0 : 1, { duration: 400 });
      }}
    >
      <Animated.View style={[styles.switchView, trackAnimatedStyle]}  onLayout={(e) => {
              height.value = e.nativeEvent.layout.height;
              width.value = e.nativeEvent.layout.width;
            }}>
      <Animated.View
              style={[
                styles.ball,
                thumbStyles
              ]}
            />
            <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default Slider;
