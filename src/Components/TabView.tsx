import * as React from 'react';
import {useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItalianScreen from '../screens/ShopScreen/components/ItalianScreen';
import MexicanScreen from '../screens/ShopScreen/components/MexicanScreen';
import USAScreen from '../screens/ShopScreen/components/USAScreen';
import {colors} from '../theme/themes';

const FirstRoute = () => <ItalianScreen />;
const SecondRoute = () => <MexicanScreen />;
const Threth = () => <USAScreen />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  treth: Threth,
});

interface IProps {
  routes: any;
  index: number;
  setIndex: (value: number) => void;
}

export default function TabViewExample({index, setIndex, routes}: IProps) {
  const layout = useWindowDimensions();

  return (
    <TabView
      renderTabBar={(props: any) => (
        <TabBar
          {...props}
          renderLabel={(title: any) => (
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                color: 'black',
                fontFamily: 'Montserrat-Regular',
              }}>
              {title?.route?.title}
            </Text>
          )}
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 16,
            elevation: 0,
          }}
          indicatorStyle={{backgroundColor: '#075B1B', padding: 1.4}}
          labelStyle={{color: '#937AEA', fontSize: 16, fontWeight: '500'}}
        />
      )}
      style={{marginTop: 10}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
