import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useRef} from 'react';
import CardScreen from '../screens/Card/CardScreen';
import EmptyScreen from '../screens/Empty/Empty';
import FinishScreen from '../screens/Finish/FinishScreen';
import R from '../res';
import {TTheme} from '../res/theme';
import ContactScreen from '../screens/ContactSreen/ContactSreen';
import InfoScreen from '../screens/Info/Info';

import HomeScreen from '../screens/Home';
import ShopScreen from '../screens/ShopScreen/ShopScreen';
import TransScreen from '../screens/TransScreen/TransScreen';
import {TNavigationParams} from '../types/navigation';
import BronScreen from '../screens/Bron/BronScreen';
import RestScreen from '../screens/Rest/RestScreen';
import Match from '../screens/Rest/components/Match';
import Cinema from '../screens/Rest/components/Cinema';
import Retsipe from '../screens/Rest/components/Retsipe';
import Branch from '../screens/Rest/components/Branch';

const Navigator = ({theme}: {theme: TTheme}) => {
  const RootStack = createStackNavigator();
  const navigationRef = useNavigationContainerRef<TNavigationParams>();
  const routeNameRef = useRef();

  useEffect(() => {}, []);

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen
          component={HomeScreen}
          name={R.routes.SCREEN_HOME}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={ShopScreen}
          name={'ShopScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={FinishScreen}
          name={'FinishScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={EmptyScreen}
          name={'EmptyScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={CardScreen}
          name={'CardScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={Match}
          name={'Match'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={Cinema}
          name={'Cinema'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={Retsipe}
          name={'Retsipe'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={Branch}
          name={'Branch'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={BronScreen}
          name={'BronScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />
        <RootStack.Screen
          component={RestScreen}
          name={'RestScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={TransScreen}
          name={'TransScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={InfoScreen}
          name={'InfoScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={ContactScreen}
          name={'ContactScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
