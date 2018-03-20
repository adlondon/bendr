import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SelectCategory from './scenes/SelectCategory';

const RouterComponent = () => (
  <Router>
    <Scene key="root" >
      <Scene
        hideNavBar="true"
        key="SelectCategory"
        component={SelectCategory} />
    </Scene>
  </Router>
);

export default RouterComponent;
