import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton/CustomButton';
import useSmartNavigation from '../../hooks/useSmartNavigation';
import {Space} from '../../Components/Space';

const InfoScreen = () => {
  const navigation = useSmartNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{paddingTop: 31}}>
        <Header />

        <Text style={styles.text}>Контакты </Text>
        <View style={{alignItems: 'center', paddingHorizontal: 20}}>
          <TextInput
            placeholder="Индекс"
            style={styles.input}
            editable={false}
          />

          <TextInput
            placeholder="Страна"
            style={styles.input}
            editable={false}
          />

          <TextInput
            placeholder="Город"
            style={styles.input}
            editable={false}
          />

          <TextInput
            placeholder="Телефон"
            style={styles.input}
            editable={false}
          />

          <Space height={20} />
        </View>
      </View>

      <CustomButton
        title={'Главная'}
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Montserrat-Black',
    textAlign: 'center',
    color: '#057C22',
    marginTop: 30,
  },
  input: {
    borderWidth: 1.5,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderColor: '#057C22',
  },
});
