import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";

import './NavigationItems.css';

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem to="/counter" exact>Counter</NavigationItem>
  </ul>
);

export default NavigationItems;
