/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiFilm,
  FiTrello,
} from 'react-icons/fi';
import { Ul, ToggleContainer } from './styles';

const RightNav = ({ open, setOpen, theme, toggleTheme }) => {
  return (
    <Ul open={open}>
      <img
        src="https://i.zst.com.br/images/8-coisas-que-todo-fa-da-marvel-ama-photo709589609-44-23-16.jpg"
        alt="Logo Marvel"
      />
      <Link onClick={() => setOpen(!open)} to="/">
        <FiHome style={{ marginRight: 10 }} />
        Home
      </Link>
      <Link onClick={() => setOpen(!open)} to="/characters">
        <FiUser style={{ marginRight: 10 }} />
        Personagens
      </Link>
      <Link onClick={() => setOpen(!open)} to="/comics">
        <FiTrello style={{ marginRight: 10 }} />
        Quadrinhos
      </Link>
      <Link onClick={() => setOpen(!open)} to="/series">
        <FiFilm style={{ marginRight: 10 }} />
        Séries
      </Link>
      <ToggleContainer onClick={toggleTheme}>
        {theme === 'dark' ? (
          <FiSun size={20} color="#fff" />
        ) : (
          <FiMoon size={20} color="#fff" />
        )}
      </ToggleContainer>
    </Ul>
  );
};

export default RightNav;
