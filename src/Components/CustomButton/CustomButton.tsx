import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
}

const CustomButton = ({onPress, title, loading = false}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    width: '85%',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 18,
    backgroundColor: '#057C22',
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomButton;
