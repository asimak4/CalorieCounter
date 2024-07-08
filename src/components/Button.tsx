import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps, TextStyle, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#3b82f6',
    height: 50,
    width: 200,
    padding: 12,
    borderRadius: 30,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Center text inside the Text component
  },
});

interface CustomButtonProps extends PressableProps {
  title: string;
  pressAction: () => void;
  otherAction?: () => void;
  buttonStyles?: ViewStyle;
  textStyles?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  pressAction,
  otherAction,
  buttonStyles,
  textStyles,
  ...props
}) => {
  return (
    <Pressable
      onPress={() => {
        pressAction();
        if (otherAction) {
          otherAction();
        }
      }}
      style={[styles.pressable, buttonStyles]}
      {...props}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
