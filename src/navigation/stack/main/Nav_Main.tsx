
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen_Home from '../../../screens/Screen_Home';
import Screen_Splash from '../../../screens/Screen_Splash';

const Stack = createNativeStackNavigator();

function Nav_Main() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Splash" component={Screen_Splash} options={{animation: 'slide_from_right'}}/>
      <Stack.Screen name="Home" component={Screen_Home} options={{animation: 'slide_from_right'}}/>
    </Stack.Navigator>
  );
}

export default Nav_Main;