import React, { useEffect, useState } from 'react';
import { listCharacters } from '../../services/api';
import Loading from '../../components/Loading';

import apiFake from '../../marvelApi.json';
import {
  Container,
  Title,
  ContainerCharacters,
  ButtonContainer,
  CardCharactersContainer,
  CardCharacters,
  CardDescriptionCharacters,
  CharacterName,
  CharacterDescription,
  CharacterNumber,
} from './styles';

function Home() {
  const [loading, setLoading] = useState(false);
  const [totalChars, setTotalChars] = useState(
    JSON.parse(localStorage.getItem('@marvel/totalCharacters' || 0))
  );
  const [characters, setCharacters] = useState(
    JSON.parse(localStorage.getItem('@marvel/characters' || []))
  );

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);

      await listCharacters(null, offset, (results) => {
        if (results.code === 'RequestThrottled') {
          setTotalChars(apiFake.data.total);
          setCharacters(apiFake.data.results);
        }
        if (JSON.parse(localStorage.getItem('@marvel/characters').length > 0)) {
          setCharacters(results.data.results);
        }
        setTotalChars(results.data.total);
        setCharacters(results.data.results);
      });
      localStorage.setItem(
        '@marvel/totalCharacters',
        JSON.stringify(totalChars)
      );
      localStorage.setItem('@marvel/characters', JSON.stringify(characters));
      setLoading(false);
    }

    loadCharacters();
  }, [offset, characters, totalChars]);

  const handlePreviousButton = () => {
    if (offset === 0) {
      return;
    }

    setOffset(offset - 20);
  };

  const handleNextButton = () => {
    if (offset >= 0) {
      setLoading(true);
      setOffset(offset + 20);
    }
    setLoading(false);
  };

  return (
    <Container>
      {loading === true ? (
        <Loading />
      ) : (
        <ContainerCharacters>
          <Title>Personagens ({`${offset + 20} de ${totalChars}`})</Title>
          <ButtonContainer>
            <button type="button" onClick={handlePreviousButton}>
              Previous
            </button>
            <button type="button" onClick={handleNextButton}>
              Next
            </button>
          </ButtonContainer>
          <CardCharactersContainer>
            {characters.map((character) => (
              // eslint-disable-next-line react/no-array-index-key
              <CardCharacters>
                <img
                  src={`${
                    character.thumbnail
                      ? `${character.thumbnail.path}.${character.thumbnail.extension}`
                      : null
                  }`}
                  alt={character.name}
                />
                <CardDescriptionCharacters>
                  <CharacterName numberOfLines={1} ellipsizeMode="middle">
                    {character.name}
                  </CharacterName>
                  <CharacterDescription
                    numberOfLines={1}
                    ellipsizeMode="middle"
                  >
                    {character.description === ''
                      ? 'Personagem sem descrição'
                      : character.description}
                  </CharacterDescription>
                  <CharacterNumber>
                    <p>Series {character.series.available}</p>
                    <p>Comics {character.comics.available}</p>
                    <p>Stories {character.stories.available}</p>
                  </CharacterNumber>
                </CardDescriptionCharacters>
              </CardCharacters>
            ))}
          </CardCharactersContainer>
        </ContainerCharacters>
      )}
    </Container>
  );
}

export default Home;
