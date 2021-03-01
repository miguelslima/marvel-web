import React, { useEffect, useState } from 'react';
import { listCharacters } from '../../services/api';
import Loading from '../../components/Loading';
import Search from '../../components/Search';
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
  const [isLoading, setIsLoading] = useState(false);
  const [totalChars, setTotalChars] = useState(0);

  const [characters, setCharacters] = useState([]);

  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      setIsLoading(true);

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
      setIsLoading(false);
    }

    loadCharacters();
  }, []);

  const handlePreviousButton = () => {
    if (offset === 0) {
      return;
    }

    setOffset(offset - 20);
  };

  const handleNextButton = () => {
    if (offset >= 0) {
      setIsLoading(true);
      setOffset(offset + 20);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = search;
    console.log(query);
    setSearch(e.target.value);
    await listCharacters(query, null, (results) => {
      console.log(results);
      if (results.code === 200) {
        setSearchResults(results.data.results);
      }
    });

    // const cachedHits = localStorage.getItem(query);

    // if (cachedHits) {
    //   this.setState({ hits: JSON.parse(cachedHits) });
    // }

    // this.props.history.push(`?query=${this.state.inputTerm}`);
  };

  console.log(searchResults);

  return (
    <Container>
      <Search
        value={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder="Search for Characters by Name"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ContainerCharacters>
            {searchResults.length > 0 ? (
              <CardCharactersContainer>
                {searchResults.map((character) => (
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
            ) : (
              <CardCharactersContainer>
                <Title>Personagens ({`${offset + 20} de ${totalChars}`})</Title>

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
            )}
          </ContainerCharacters>
        </>
      )}
      <ButtonContainer>
        <button type="button" onClick={handlePreviousButton}>
          Previous
        </button>
        <button type="button" onClick={handleNextButton}>
          Next
        </button>
      </ButtonContainer>
    </Container>
  );
}

export default Home;
