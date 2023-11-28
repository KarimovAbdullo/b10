import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {Space} from '../../Components/Space';

// import CustomButton from '../../Components/CustomButton/CustomButton';
// import {Space} from '../../Components/Space';
// import {s} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header';
import TabViewExample from '../../Components/TabView';

const ShopScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  const routes = [
    {key: 'first', title: 'Итальянская'},
    {key: 'second', title: 'Мексиканская'},
    {key: 'treth', title: 'Американская'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'black'}
        barStyle="dark-content"
        translucent={true}
      />
      <Header title="Какую еду вы хотите?" />

      <TabViewExample routes={routes} setIndex={setIndex} index={index} />
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FEFEFF',
    paddingHorizontal: 20,
    // flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: '900',
  },
  inp: {
    backgroundColor: 'rgba(237, 237, 237, 1)',
    borderRadius: 30,
    paddingLeft: 50,
    width: 300,
    paddingVertical: 12,
  },
  container: {
    paddingTop: 40,
    backgroundColor: 'white',
    flex: 1,
  },
});
