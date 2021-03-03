/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import RightNav from '../RightNav';

import { StyledBurger } from './styles';

const Burger = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <RightNav
        theme={theme}
        toggleTheme={toggleTheme}
        setOpen={setOpen}
        open={open}
      />
    </>
  );
};

export default Burger;
