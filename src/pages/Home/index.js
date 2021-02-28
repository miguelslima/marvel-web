import React, { useEffect, useState } from 'react';

import { listCharacters } from '../../services/api';

function Home() {
  const [loading, setLoading] = useState(false);
  const [totalChars, setTotalChars] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);

      await listCharacters(null, offset, (results) => {
        if (JSON.parse(localStorage.getItem('@marvel/characters').length > 0)) {
          setCharacters(results.results);
        }
        setTotalChars(results.total);
        setCharacters(results.results);
      });
      localStorage.setItem(
        '@marvel/totalCharacters',
        JSON.stringify(totalChars)
      );
      localStorage.setItem('@marvel/characters', JSON.stringify(characters));
      setLoading(false);
    }

    loadCharacters();
  }, [offset, characters]);

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
    <div style={{ marginBottom: 60 }}>
      <h1 style={{ textAlign: 'center' }}>
        Personagens ({`${offset + 20} de ${totalChars}`})
      </h1>
      {loading === true ? (
        <h1>Carregando</h1>
      ) : (
        <div>
          <div style={{ textAlign: 'center', margin: 20 }}>
            <button type="button" onClick={handlePreviousButton}>
              Previous
            </button>
            <button
              style={{ marginLeft: 20 }}
              type="button"
              onClick={handleNextButton}
            >
              Next
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {characters.map((character) => (
              // eslint-disable-next-line react/no-array-index-key
              <div
                style={{
                  width: 200,
                  margin: 10,
                  textAlign: 'center',
                  border: '2px solid red',
                }}
              >
                <img
                  style={{ width: 196, height: 200 }}
                  src={`${
                    character.thumbnail
                      ? `${character.thumbnail.path}.${character.thumbnail.extension}`
                      : null
                  }`}
                  alt={character.name}
                />
                <p style={{ backgroundColor: '#ddd' }}>{character.name}</p>
                <p style={{ fontSize: 12 }}>
                  {character.description
                    ? character.description
                    : 'Personagem sem descrição'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
