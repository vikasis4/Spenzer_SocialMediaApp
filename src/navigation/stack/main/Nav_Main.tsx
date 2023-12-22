
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen_Splash from '../../../screens/Screen_Splash';
import Nav_Bottom from '../../../navigation/bottom/Nav_Bottom';

const Stack = createNativeStackNavigator();

function Nav_Main() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Splash" component={Screen_Splash} options={{animation: 'slide_from_right'}}/>
      <Stack.Screen name="Nav_Bottom" component={Nav_Bottom} options={{animation: 'slide_from_right'}}/>
    </Stack.Navigator>
  );
}

export default Nav_Main;