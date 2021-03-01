import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

function Sobre() {
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState(
    JSON.parse(localStorage.getItem('@marvel/characters' || []))
  );

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Sobre</h1>
    </div>
  );
}

export default Sobre;
