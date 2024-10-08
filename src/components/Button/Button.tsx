import React from 'react';
import {
  TouchableOpacity,
  Text,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import styles from './Button.styles';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  btnWidth?: number; // Optional prop for button width
  gradientColors?: string[];
};

const Button: React.FC<ButtonProps> = ({
  title = 'Next',
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  gradientColors = ['#1C4BF4', '#5A90F2'],
  btnWidth = 200,
}) => {
  // Shared value for scaling the button
  const scale = useSharedValue(1);

  // Animated style that scales the button on press
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // Handle button press-in and press-out for scaling animation
  
  const handlePressIn = () => {
    scale.value = withSpring(0.97);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <Animated.View style={[animatedStyles]}>
      <TouchableOpacity
        style={[
          styles.button,
          styles[variant],
          styles[size],
          { width: btnWidth },
          disabled && styles.disabled,
          style,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        activeOpacity={0.7}
      >
        <LinearGradient
          colors={gradientColors}
          style={[styles.gradient, { width: btnWidth }]}
          start={{ x: 0.5, y: 0 }} // Vertical gradient
          end={{ x: 0.5, y: 1 }}
        >
          <Text
            style={[
              styles.text,
              variant === 'outline' ? styles.textOutline : { color: '#ffffff' }, // Ensure visible text color
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;
