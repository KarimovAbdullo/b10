import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton/CustomButton';
import useSmartNavigation from '../../hooks/useSmartNavigation';

const RestScreen = () => {
  const navigation = useSmartNavigation();

  return (
    <ImageBackground
      source={require('../../assets/images/back1.png')}
      style={styles.container}>
      <View style={{paddingTop: 30}}>
        <Header />

        <Text style={styles.itemText}>{'События ресторана'}</Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: 30,
            flex: 1,
            justifyContent: 'space-between',
          }}
        />
        <View>
          <Text style={styles.data}>17 ноября в 20:00</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Retsipe')}>
            <Text style={styles.name}>Пицца и Кино</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.data}>17 ноября в 20:00</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Cinema')}>
            <Text style={styles.name}>Мастер-класс по приготовлению пиццы</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.data}>17 ноября в 20:00</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Branch')}>
            <Text style={styles.name}>Олимпийский бранч</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.data}>17 ноября в 20:00</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Match')}>
            <Text style={styles.name}>Вечер Футбола </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RestScreen;

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
  btn: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 280,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    color: '#057C22',
    fontSize: 17,
    textAlign: 'center',
  },
});
