import React from 'react';

import Burger from './Burger';
import { Nav } from './styles';

function Header() {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
}

export default Header;
