import React from 'react';
import { createAppContainer } from 'react-navigation';
import MainNavigator from "./src/navigation/mainNavigator";
import { Root } from 'native-base';

const MainContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
        <Root>
            <MainContainer />
        </Root>
    );
  }
}

//Pasar a stateless