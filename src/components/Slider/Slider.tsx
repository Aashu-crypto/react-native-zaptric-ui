import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Color } from '../../context/GlobalStyles';

type SliderProps = {
  status?: boolean;
  title?: string;
  btnWidth?: number;
};

const Slider: React.FC<SliderProps> = ({ status = false, title, btnWidth = 300 }) => {
  const isOn = useSharedValue(status ? 1 : 0);
  const translateX = useSharedValue(0); // Value for tracking the thumb's position
  const thumbWidth = 50; // Static thumb width
  const trackWidth = btnWidth - thumbWidth; // Max width the thumb can move

  // Synchronize `isOn` with the `status` prop whenever it changes
  useEffect(() => {
    isOn.value = status ? withTiming(1, { duration: 400 }) : withTiming(0, { duration: 400 });
    translateX.value = status ? trackWidth : 0;
  }, [status]);

  // Gesture handling for dragging the thumb
  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      // Update thumb position within bounds
      translateX.value = Math.max(0, Math.min(trackWidth, event.translationX));
    })
    .onEnd(() => {
      // On release, we keep the thumb at the last position without snapping
      translateX.value = Math.max(0, Math.min(trackWidth, translateX.value));
    });

  // Style for the track color
  const trackStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(isOn.value, [0, 1], [Color.backGroundColor, Color.appDefaultColor]); // Red to Green transition
    return {
      backgroundColor,
      borderRadius: 25,
    };
  });

  // Animated style for the thumb
  const thumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <GestureHandlerRootView style={{ height:'auto' }}>
      <View style={{ width: btnWidth, height: 54, borderRadius: 25, padding: 2 }}>
        <Animated.View style={[{ width: '100%', height: '100%' }, trackStyle]}>
          <GestureDetector gesture={gesture}>
            <Animated.View
              style={[
                {
                  height: 50,
                  width: thumbWidth,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  position: 'absolute',
                },
                thumbStyle,
              ]}
            />
          </GestureDetector>
        </Animated.View>
        
      </View>

    </GestureHandlerRootView>
  );
};

export default Slider;
