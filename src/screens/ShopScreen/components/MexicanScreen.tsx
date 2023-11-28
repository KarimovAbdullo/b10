// import { getProduct } from 'state/product/selectors'
import {ItalianItem, Mexican} from '../../../api/data/FoodData';

import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
  Text,
  View,
} from 'react-native';
import {Space} from '../../../Components/Space';
import AsyncStorage from '@react-native-community/async-storage';

export interface IData {
  id: number;
  name: string;
  title?: string;
  gr?: number;
  callory?: number;
  image: ImageSourcePropType;
  min?: number;
  serve?: number;
}

const CART_ITEMS_KEY = 'CART_ITEMS';

const MexicanScreen = () => {
  // const addToCart = () => {};
  const saveItemToAsyncStorage = async (item: ItalianItem) => {
    try {
      const existingCartItems = await AsyncStorage.getItem(CART_ITEMS_KEY);
      let newCartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
      newCartItems.push(item);

      await AsyncStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newCartItems));
      Alert.alert('Добавлено в корзину!');
    } catch (error) {
      Alert.alert('Error', 'Failed to add item to cart');
    }
  };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <FlatList
        data={Mexican}
        numColumns={2}
        // style={{paddingLeft: 20}}
        columnWrapperStyle={styles.flatColumn}
        contentContainerStyle={{paddingHorizontal: 16}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.imgCard}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Image
                source={require('../../../assets/images/italiaf.png')}
                style={{width: 25, height: 15}}
              />
              <Space width={10} />
              <Text style={styles.text}>{item.name}</Text>
            </View>

            <Space height={10} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 20,
                paddingLeft: 40,
                alignItems: 'center',
              }}>
              <Text style={styles.textPrice}>
                {'$'} {item.price}
              </Text>

              {/* add to cart */}
              <TouchableOpacity onPress={() => saveItemToAsyncStorage(item)}>
                <Image
                  source={require('../../../assets/images/add.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MexicanScreen;

const styles = StyleSheet.create({
  main: {
    paddingTop: 20,
    backgroundColor: 'white',
  },
  image: {
    width: 190,
    height: 170,
  },
  card: {
    // flexDirection: 'row',
    borderRadius: 12,
    marginBottom: 30,
    marginTop: 60,
    width: '48%',
    height: 200,
    // marginTop: 50,
    // alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    elevation: 12,
  },

  imgCard: {
    position: 'absolute',
    top: -60,
  },

  text: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Montserrat-Medium',
  },
  textPrice: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#057C22',
    fontFamily: 'DMSans_18pt-Bold',
  },
  flatColumn: {
    justifyContent: 'space-between',
  },
});
