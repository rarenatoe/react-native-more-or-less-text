import React from 'react';
import { Platform, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

const DefaultText = React.forwardRef<Text, TextProps>(({ style: customStyle, ...props }, ref) => (
  <Text
    ref={ref}
    style={[styles.default, props.onPress && styles.pressable, customStyle]}
    {...props}
  />
));

export type PressableStyles = { default: TextStyle; pressable: TextStyle };

export const styles = StyleSheet.create<PressableStyles>({
  default: {
    fontFamily: Platform.select({ ios: 'Palatino', android: 'Roboto' }),
  },
  pressable: {
    color: '#800080',
    fontWeight: 'bold',
  },
});

export default DefaultText;
