import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav_Main from './src/navigation/stack/main/Nav_Main';
import { Provider } from 'react-redux'
import { store } from './src/store/store';
import Comment_section from './src/components/post/Comment_section';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Nav_Main />
      </Provider>
    </NavigationContainer>
  );
}



export default App;
