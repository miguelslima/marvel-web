import React from 'react';
import broken from '../../assets/broken.jpg';
// import { Container } from './styles';
console.log(broken);
function NotFound404() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(https://img5.goodfon.com/wallpaper/nbig/c/74/captain-america-marvel-superhero-shield-broken-hands-comics.jpg)`,
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <h1
          style={{
            color: '#A00900',
          }}
        >
          Página não encontrada
        </h1>
      </div>
    </div>
  );
}

export default NotFound404;
