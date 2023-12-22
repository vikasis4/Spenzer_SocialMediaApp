import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav_Main from './src/navigation/stack/main/Nav_Main';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Nav_Main />
    </NavigationContainer>
  );
}



export default App;
