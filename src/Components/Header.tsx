import React from 'react';
import {TouchableOpacity, View, ViewStyle, Text, Image} from 'react-native';
import useSmartNavigation from '../hooks/useSmartNavigation';

import {ScaledSheet} from 'react-native-size-matters/extend';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IProps {
  title?: string;
  style?: ViewStyle;
  icon?: boolean;
}

export default function Header({title}: IProps) {
  const navigation = useSmartNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Image
          source={require('../assets/images/menu.png')}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
      {title ? <Text style={styles.title}>{title}</Text> : null}

      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('CardScreen')}>
        <Image
          source={require('../assets/images/bag.png')}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 30,
  },
  title: {
    maxWidth: '75%',
    flex: 0,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },
  icon: {
    borderWidth: 1,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    backgroundColor: '#075B1B',
    borderRadius: 12,
  },
});
