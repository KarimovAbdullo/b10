import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import useSmartNavigation from '../../../hooks/useSmartNavigation';

const Branch = () => {
  const navigation = useSmartNavigation();

  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../../assets/images/back4.png')}
      style={styles.container}>
      <TouchableOpacity
        style={{margin: 20}}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/images/Back.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <View style={{paddingTop: 30}}>
        <View style={styles.cart} />
      </View>
    </ImageBackground>
  );
};

export default Branch;

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
    fontSize: 26,
    marginRight: 10,
    fontFamily: 'Montserrat-Black',
    color: '#057C22',
    textAlign: 'center',
    marginTop: 30,
  },
  data: {
    textAlign: 'center',
    fontSize: 16,
  },
  cart: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30,
    flex: 1,
    justifyContent: 'space-between',
  },
});
