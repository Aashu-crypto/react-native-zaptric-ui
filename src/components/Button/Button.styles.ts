  import { StyleSheet } from 'react-native';
  import { Color } from '../../context/GlobalStyles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
  },
  primary: {
    // No background color needed if using gradient
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  outline: {
    borderWidth: 2,
    borderColor: Color.appDefaultColor,
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: '#d3d3d3',
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  textOutline: {
    color: Color.appDefaultColor,
  },
});

export default styles;
