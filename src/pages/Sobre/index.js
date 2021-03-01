/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { readCharacterById } from '../../services/api';
import { charIdHome } from '../../utils/idCharsHome';

import Loading from '../../components/Loading';
import CardChars from '../../components/CardChars';
import { Container } from './styles';

function Sobre() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 11; i++) {
      setIsLoading(true);
      readCharacterById(charIdHome[i], (results) => {
        setCharacters((chars) => [...chars, results]);
      });
    }
    setIsLoading(false);
  }, []);

  return (
    <Container>
      {isLoading && <Loading />}

      {characters.length > 0 &&
        characters.map((character) => <CardChars character={character} />)}
    </Container>
  );
}

export default Sobre;
