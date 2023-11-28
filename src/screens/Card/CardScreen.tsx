import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ImageSourcePropType} from 'react-native';
import Header from '../../Components/Header';
import CustomButton from '../../Components/CustomButton/CustomButton';
import useSmartNavigation from '../../hooks/useSmartNavigation';

// Define the structure of items in your cart
interface ItalianItem {
  id: number;
  name: string;
  price: string;
  image: ImageSourcePropType;
}

const CART_ITEMS_KEY = 'CART_ITEMS';

const CartScreen = () => {
  const navigation = useSmartNavigation();
  // Now TypeScript knows what structure cartItems will have
  const [cartItems, setCartItems] = useState<ItalianItem[]>([]);

  useEffect(() => {
    const getCartItems = async () => {
      const items = await AsyncStorage.getItem(CART_ITEMS_KEY);
      setCartItems(items ? JSON.parse(items) : []);
    };

    getCartItems();
  }, []);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0,
  );

  const deleteItem = async (itemId: number) => {
    const newCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(newCartItems);
    await AsyncStorage.setItem(CART_ITEMS_KEY, JSON.stringify(newCartItems));
  };

  return (
    <SafeAreaView style={styles.container}>
      {cartItems.length > 0 ? (
        <View style={{marginTop: 40}}>
          <Header />
          <FlatList
            style={{marginTop: 40}}
            data={cartItems}
            keyExtractor={(item, index) => item.id.toString() + index}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <View style={styles.image}>
                  <Image source={item.image} style={styles.itemImage} />
                </View>
                <View style={styles.cart}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <Image
                      source={require('../../assets/images/x.png')}
                      style={{width: 16, height: 16}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.counts}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/minus.png')}
                      style={{width: 25, height: 25}}
                    />
                  </TouchableOpacity>
                  <Text style={{fontSize: 16}}>1</Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/plus.png')}
                      style={{width: 25, height: 25}}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.itemPrice}>
                  {'$ '}
                  {item.price}
                </Text>
                {/* Ensure item.image is correctly formatted for Image component */}
              </View>
            )}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              marginHorizontal: 50,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.price}>Итого</Text>
            <Text style={styles.price}>{totalPrice.toFixed(0) + ' $'}</Text>
          </View>
        </View>
      ) : (
        <View style={{paddingTop: 30}}>
          <Header />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              paddingTop: 200,
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../../assets/images/none.png')}
              style={{width: 150, height: 150}}
            />
          </View>
        </View>
      )}

      <CustomButton
        title={cartItems.length > 0 ? 'Разместить заказ' : 'Главная'}
        onPress={
          cartItems.length > 0
            ? () => navigation.navigate('EmptyScreen')
            : () => navigation.navigate('HomeScreen')
        }
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 16,
    // marginTop: 20,
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
    fontSize: 18,
    marginRight: 10,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  itemImage: {
    width: 105,
    height: 95,
    zIndex: 1,
  },
  noItemsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Montserrat-Bold',
  },
  image: {
    position: 'absolute',
    left: -20,
    // zIndex: 1,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counts: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: 90,
    justifyContent: 'space-between',
    marginTop: 4,
  },
  itemPrice: {
    color: '#057C22',
    fontFamily: 'Montserrat-Black',
    fontSize: 18,
  },
  price: {
    fontFamily: 'Montserrat-Black',
    color: '#057C22',
    fontSize: 20,
  },
});
