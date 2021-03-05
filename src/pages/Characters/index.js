import React, { useEffect, useState } from 'react';
import { listCharacters } from '../../services/api';
import Loading from '../../components/Loading';
import Search from '../../components/Search';
import CardChars from '../../components/CardChars';

import apiFake from '../../marvelApi.json';
import {
  Container,
  Title,
  ContainerCharacters,
  ButtonContainer,
  CardCharactersContainer,
} from './styles';

function Characters() {
  const localUser =
    JSON.parse(localStorage.getItem('@marvel/characters')) || [];
  const countLocalUser =
    JSON.parse(localStorage.getItem('@marvel/totalCharacters')) || [];

  const [isLoading, setIsLoading] = useState(false);
  const [totalChars, setTotalChars] = useState(countLocalUser);

  const [characters, setCharacters] = useState(localUser);

  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    async function loadCharacters() {
      setIsLoading(true);

      if (offset === 0 && offset < 99) {
        setButtonDisabled(true);
      } else if (offset > 99) {
        setButtonDisabled(false);
      }

      await listCharacters(null, offset, (results) => {
        console.log(offset);
        if (results.code === 'RequestThrottled') {
          setTotalChars(apiFake.data.total);
          setCharacters(apiFake.data.results);
          setIsLoading(false);
        }

        if (JSON.parse(localStorage.getItem('@marvel/characters').length > 0)) {
          setCharacters(results.data.results);
          setIsLoading(false);
        }

        setTotalChars(results.data.total);
        setCharacters(results.data.results);

        localStorage.setItem(
          '@marvel/totalCharacters',
          JSON.stringify(totalChars)
        );
        localStorage.setItem('@marvel/characters', JSON.stringify(characters));
      });
    }

    loadCharacters();
  }, [offset]);

  const handlePreviousButton = () => {
    setIsLoading(true);
    if (offset === 0) {
      return;
    }

    setOffset(offset - 100);
    setIsLoading(false);
  };

  const handleNextButton = () => {
    setIsLoading(true);
    if (offset >= 0) {
      setIsLoading(true);
      setOffset(offset + 100);
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
    setSearch(e.target.value);
    await listCharacters(query, null, (results) => {
      if (results.code === 200) {
        setSearchResults(results.data.results);
        setSearch('');
      }
    });

    // const cachedHits = localStorage.getItem(query);

    // if (cachedHits) {
    //   this.setState({ hits: JSON.parse(cachedHits) });
    // }

    // this.props.history.push(`?query=${this.state.inputTerm}`);
  };

  return (
    <Container>
      <Search
        value={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder="Procure por um personagem pelo nome. Ex: Iron Man"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ContainerCharacters>
            {searchResults.length > 0 ? (
              <>
                <Title>Resultado da busca</Title>
                <CardCharactersContainer>
                  {searchResults.map((character) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <CardChars character={character} />
                  ))}
                </CardCharactersContainer>
              </>
            ) : (
              <>
                <Title>
                  Personagens ({`${offset + 100} de ${totalChars}`})
                </Title>
                <ButtonContainer>
                  <button
                    disabled={buttonDisabled}
                    type="button"
                    onClick={handlePreviousButton}
                  >
                    Previous
                  </button>
                  <button type="button" onClick={handleNextButton}>
                    Next
                  </button>
                </ButtonContainer>
                <CardCharactersContainer>
                  {characters.map((character) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <CardChars character={character} />
                  ))}
                </CardCharactersContainer>
              </>
            )}
          </ContainerCharacters>
        </>
      )}
    </Container>
  );
}

export default Characters;
