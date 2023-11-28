import React, {useState} from 'react';
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

const BronScreen = () => {
  const navigation = useSmartNavigation();
  const [check, setCheck] = useState(false);

  const pressCheck = () => {
    setCheck(true);
  };

  const goMain = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{paddingTop: 30}}>
        <Header />

        {check ? (
          <View>
            <Image
              source={require('../../assets/images/true.png')}
              style={{width: 350, height: 350, alignSelf: 'center'}}
            />
            <Text style={styles.secondtext}>Спасибо!</Text>
            <Text style={styles.secondtext}>Зарезервированный!</Text>
            <Text style={styles.secondtext}>стол!</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.text}>Резервирование стола</Text>
            <View style={{alignItems: 'center', paddingHorizontal: 20}}>
              <TextInput placeholder="Полное имя" style={styles.input} />

              <TextInput placeholder="Номер телефона" style={styles.input} />

              <TextInput placeholder="Дата" style={styles.input} />

              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Комментарий"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
              />

              <Space height={20} />
            </View>
          </View>
        )}
      </View>

      <CustomButton
        title={check ? 'Главная' : 'Зарезервировать'}
        onPress={check ? goMain : pressCheck}
      />
    </SafeAreaView>
  );
};

export default BronScreen;

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
  textArea: {
    textAlignVertical: 'top',
    borderWidth: 1.5,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderColor: '#057C22',
  },
  secondtext: {
    fontSize: 24,
    fontFamily: 'Montserrat-Black',
    textAlign: 'center',
    color: 'black',
    // marginTop: 30,
  },
});
