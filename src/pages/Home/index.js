/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { readCharacterById } from '../../services/api';
import { charIdHome } from '../../utils/idCharsHome';

import Loading from '../../components/Loading';
import CardChars from '../../components/CardChars';
import { Container, Title, DescriptionProject } from './styles';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    if (characters.length === 11) {
      setIsLoading(false);
      return;
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 11; i++) {
      readCharacterById(charIdHome[i], (results) => {
        setCharacters((chars) => [...chars, results]);
      });
    }
    setIsLoading(false);
  }, [characters.length]);

  return (
    <Container>
      <Title>Sobre o projeto</Title>

      <DescriptionProject>
        Um pequeno projeto usando React para ilustrar recursos de REST do lado
        do cliente de uma api pública veja mais em{' '}
        <a href="https://developer.marvel.com/">API MARVEL</a>. Abaixo foram
        listados alguns exemplos de dados vindo da API.
      </DescriptionProject>

      {isLoading === true && <Loading />}

      {characters.length > 0 &&
        characters.map((character) => <CardChars character={character} />)}
    </Container>
  );
}

export default Home;
