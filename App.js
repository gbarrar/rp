import React from 'react';
import { createAppContainer } from 'react-navigation';
import MainNavigator from "./src/navigation/mainNavigator";

const MainContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
        <MainContainer />
    );
  }
}

//Pasar a stateless