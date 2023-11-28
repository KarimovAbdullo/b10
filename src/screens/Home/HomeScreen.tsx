import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// import CustomButton from '../../Components/CustomButton/CustomButton';
import {Space} from '../../Components/Space';
import {s} from 'react-native-size-matters';
import MyButton from '../../Components/MyButton.tsx/MyButton';
import CustomButton from '../../Components/CustomButton/CustomButton';
import BagIcon from '../../assets/icons/BagIcon';
import {useNavigation} from '@react-navigation/native';
// import {getUser} from '../../state/user/selectors';
// import useAppSelector from '../../hooks/useAppSelector';

const HomeScreen = () => {
  const navigation = useNavigation();
  // // const {products} = useAppSelector(getUser);

  // const goShop = () => {
  //   navigation.navigate('ShopScreen');
  // };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#075B1B',
        alignItems: 'center',
        paddingTop: 30,
      }}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      <Space height={12} />

      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 180, height: 140}}
      />

      <Space height={42} />
      <View style={styles.card}>
        <MyButton
          title="Главная"
          onPress={() => navigation.navigate('ShopScreen')}
        />

        <Space height={15} />

        <MyButton
          title="Корзина "
          onPress={() => navigation.navigate('CardScreen')}
        />
        <Space height={15} />

        <MyButton
          title="Резерв столика"
          onPress={() => navigation.navigate('BronScreen')}
        />
        <Space height={15} />
        <MyButton
          title="Контакты"
          onPress={() => navigation.navigate('InfoScreen')}
        />
        <Space height={15} />
        <MyButton
          title="События ресторана"
          onPress={() => navigation.navigate('RestScreen')}
        />
        <Space height={15} />
      </View>
      <Space height={45} />

      <TouchableOpacity onPress={() => navigation.navigate('CardScreen')}>
        <Image
          source={require('../../assets/images/bag.png')}
          style={{width: 80, height: 80}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    // borderRadius: 30,
    // paddingHorizontal: 20,
    // alignSelf: 'center',
    // backgroundColor: '#FFF',
    // paddingVertical: 30,
    // borderColor: 'rgba(236, 236, 236, 1)s',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.53,
    // shadowRadius: 13.97,
    // elevation: 8,
  },

  icon: {
    width: s(30),
    height: s(29),
  },

  iconCard: {
    backgroundColor: '#ECECEC',
    width: s(90),
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 8,
  },
});
