/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { Ul } from './styles';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <img
        src="https://i.zst.com.br/images/8-coisas-que-todo-fa-da-marvel-ama-photo709589609-44-23-16.jpg"
        alt="Logo Marvel"
      />
      <Link to="/">Home</Link>
      <Link to="/characters">Personagens</Link>
      <Link to="/comics">Quadrinhos</Link>
      <Link to="/series">Séries</Link>
    </Ul>
  );
};

export default RightNav;
