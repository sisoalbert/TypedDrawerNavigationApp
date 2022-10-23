import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens import
import Home from '../screens/Home';
import Settings from '../screens/Home';

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      {/* Drawer Screens here */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Drawer;
