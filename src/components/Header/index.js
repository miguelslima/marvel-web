/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Burger from './Burger';

import { Nav } from './styles';

function Header({ theme, toggleTheme }) {
  const isLight = theme === 'light';

  return (
    <Nav>
      <Burger theme={theme} toggleTheme={toggleTheme} />
    </Nav>
  );
}

export default Header;
