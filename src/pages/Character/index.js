/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { readCharacterById, listComics, listSeries } from '../../services/api';

import Loading from '../../components/Loading';

import {
  Container,
  CharacterHeader,
  CharacterContainer,
  Title,
  DescriptionCharacter,
  UrlsContainer,
  ComicsContainer,
  SeriesContainer,
} from './styles';

function Character() {
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const data = useLocation();

  useEffect(() => {
    const handleSearch = () => {
      if (character.length === 0) {
        setIsLoading(true);
      }
      readCharacterById(data.state.id, (char) => {
        setCharacter(char);
      });
      listComics(data.state.id, (comic) => setComics(comic));
      listSeries(data.state.id, (serie) => setSeries(serie));
      setIsLoading(false);
    };
    handleSearch();
  }, []);

  return (
    <Container>
      {isLoading === true ? (
        <Loading />
      ) : (
        <CharacterContainer>
          <Title>{character.name}</Title>
          <CharacterHeader>
            <img
              src={`${
                character.thumbnail
                  ? `${character.thumbnail.path}.${character.thumbnail.extension}`
                  : null
              }`}
              alt={character.name}
            />
            <DescriptionCharacter>
              <p>
                {character.description
                  ? character.description
                  : 'Não há descrição para esse herói'}
              </p>
              <ul className="featured-character__links">
                <UrlsContainer>
                  {character.urls
                    ? character.urls.map((link) => (
                        <li className="feature-character__link">
                          <a href={link.url} target="_blank">
                            {link.type}
                          </a>
                        </li>
                      ))
                    : null}
                </UrlsContainer>
              </ul>
            </DescriptionCharacter>
          </CharacterHeader>

          <ComicsContainer>
            <h2>Comics</h2>
            {comics.map((comic) => (
              <img src={comic} alt="" />
            ))}
          </ComicsContainer>

          <SeriesContainer>
            <h2>Series</h2>
            {series.map((serie) => (
              <img src={serie} alt="" />
            ))}
          </SeriesContainer>
        </CharacterContainer>
      )}
    </Container>
  );
}

export default Character;
