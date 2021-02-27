import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Header() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
      }}
    >
      <img
        style={{
          width: 100,
          height: 70,
        }}
        src="https://i.zst.com.br/images/8-coisas-que-todo-fa-da-marvel-ama-photo709589609-44-23-16.jpg"
        alt="Logo Marvel"
      />
      <div
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: '#A00001',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/search">Pesquisar personagens</Link>
      </div>
    </div>
  );
}

export default Header;
