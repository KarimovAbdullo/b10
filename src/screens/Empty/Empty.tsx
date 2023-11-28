import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, Text} from 'react-native';

import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton/CustomButton';
import useSmartNavigation from '../../hooks/useSmartNavigation';

const EmptyScreen = () => {
  const navigation = useSmartNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingTop: 30}}>
        <Header />

        <Text style={styles.itemText}>{`Спасибо!
Заказ выполнен`}</Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: 50,
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../assets/images/qr.png')}
            style={{width: 150, height: 150}}
          />
        </View>
      </View>

      <CustomButton
        title={'Главная'}
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </SafeAreaView>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemContainer: {
    paddingVertical: 10,
    flex: 1,
    marginBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
    elevation: 6,
    // marginTop: 40,
    borderRadius: 8,
    paddingLeft: 100,
    height: 100,
    marginHorizontal: 20,
    paddingRight: 20,
  },
  itemText: {
    fontSize: 24,
    marginRight: 10,
    fontFamily: 'Montserrat-Bold',
    color: '#057C22',
    textAlign: 'center',
    marginTop: 70,
  },
});
