// import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Space} from '../../Components/Space';

const ContactScreen = () => {
  return (
    <View style={styles.card}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />
      <TouchableOpacity style={{padding: 10}} />
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          paddingLeft: 10,
          marginTop: 10,
        }}>
        Контакты
      </Text>

      <Space height={60} />

      <Space height={20} />

      <TouchableOpacity style={styles.btn}>
        <Text style={{color: 'black', fontSize: 16}}>Go main</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  btn: {
    position: 'absolute',
    bottom: 60,
    paddingVertical: 20,
    backgroundColor: '#F1EB2A',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 25,
    width: '100%',
  },
});
